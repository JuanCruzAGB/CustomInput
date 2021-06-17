// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/js/Class.js";

// ? External repository
import { HTMLCreator as HTMLCreatorJS } from "../../HTMLCreatorJS/js/HTMLCreator.js";

/**
 * * InputFileMaker makes an excellent input type file.
 * @export
 * @class InputFileMaker
 * @extends Class
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class InputFileMaker extends Class {
    /**
     * * Creates an instance of InputFileMaker.
     * @param {object} [props] InputFileMaker properties:
     * @param {string} [props.id='input-1'] Input HTML element primary key.
     * @param {string} [props.message='File not chosen'] Not found message.
     * @param {string} [props.button='Select file'] Button button.
     * @param {string[]} [props.accept] Input mimetype accepted.
     * @param {string} [props.name='file'] Input name.
     * @param {object} [props.classes] Input class names.
     * @param {string[]} [props.classes.button] Button class names.
     * @param {string[]} [props.classes.image] Image class names.
     * @param {string[]} [props.classes.input] Input class names.
     * @param {string[]} [props.classes.message] Text class names.
     * @param {object} [states] InputFileMaker states:
     * @param {HTMLElement|false} [states.generate=false] If the Input has to be generated.
     * @param {boolean} [states.disabled=false] If the Input has to be disabled.
     * @param {string|false} [states.image=false] If the are a default image.
     * @param {object} [callbacks] InputFileMaker callback:
     * @param {function} [callbacks.change.function] On change input callback function.
     * @param {object} [callbacks.change.params] On change input callback function params.
     * @param {function} [callbacks.click.function] On click input callback function.
     * @param {object} [callbacks.click.params] On click input callback function params.
     * @memberof InputFileMaker
     */
    constructor (props = {
        id: 'input-1',
        accept: [],
        button: 'Select file',
        message: 'File not chosen',
        name: 'file',
        classes: {
            button: [],
            image: [],
            input: [],
            message: [],
        },
    }, state = {
        generate: false,
        disabled: false,
        image: false,
    }, callbacks = {
        change: {
            function: function (params) { /* console.log(params) */ },
            params: {}
        }, click: {
            function: function (params) { /* console.log('clicked') */ },
            params: {}
        }
    }) {
        super({ ...InputFileMaker.props, ...props },{ ...InputFileMaker.state, ...state });
        this.setCallbacks({ ...InputFileMaker.callbacks, ...callbacks });
        this.setInput();
        this.setImage();
        this.setButton();
        this.setMessage();
    }

    /**
     * * Set the InputFileMaker Button.
     * @param {object} [button] InputFileMaker button properties.
     * @memberof InputFileMaker
     */
    setButton () {
        const instance = this;
        if (this.state.generate) {
            this.button = new HTMLCreatorJS('button', {
                props: {
                    id: `${ this.props.id }-button`,
                    title: this.props.button,
                    classes: ((this.props.classes.hasOwnProperty('button') && this.props.classes.button.length) ? [...this.props.classes.button, 'input-button', 'pointer'] : ['input-button', 'pointer']),
                }, state: {
                    preventDefault: true,
                    disabled: this.state.disabled,
                }, callback: {
                    function: this.click,
                    params: {
                        inputFileMakerJS: this,
                        ...this.callbacks.click.params
                }}, innerHTML: new HTMLCreatorJS('span', {
                    props: {},
                    innerHTML: this.props.button,
                }).html
            });
            this.state.generate.appendChild(this.button.html);
        }
        if (!this.state.generate) {
            this.button = document.querySelector(`#${ this.props.id }-button`);
            this.button.addEventListener('change', function (e) {
                e.preventDefault();
                instance.click();
            });
        }
    }

    /**
     * * Set the InputFileMaker Image.
     * @memberof InputFileMaker
     */
    setImage () {
        const instance = this;
        if (this.state.generate) {
            this.image = new HTMLCreatorJS('img', {
                props: {
                    id: `${ this.props.id }-image`,
                    url: this.state.image,
                    name: 'Image genereted with InputFileMakerJS',
                    classes: ((this.props.classes.hasOwnProperty('image') && this.props.classes.image.length) ? [...this.props.classes.image, 'input-image', 'pointer'] : ['input-image', 'pointer']),
            }});
            this.image.html.addEventListener('click', function(e) {
                e.preventDefault();
                instance.click();
            });
            this.state.generate.appendChild(this.image.html);
            if (this.image.props.url) {
                this.files = [this.image.props.url];
            }
        }
        if (!this.state.generate) {
            this.image = document.querySelector(`${ this.props.id }-image`);
            this.image.addEventListener('click', function(e) {
                e.preventDefault();
                instance.click();
            });
            if (this.image.src) {
                this.files = [this.image.src];
            }
        }
    }

    /**
     * * Set the InputFileMaker Inputs.
     * @memberof InputFileMaker
     */
    setInput () {
        const instance = this;
        if (this.state.generate) {
            this.input = new HTMLCreatorJS('input', {
                props: {
                    id: this.props.id,
                    name: this.props.name,
                    type: 'file',
                    classes: ((this.props.classes.hasOwnProperty('input') && this.props.classes.input.length) ? [...this.props.classes.input, 'hidden'] : ['hidden']),
                    accept: this.props.accept,
                }, state: {
                    disabled: this.state.disabled
                }, callbacks: {
                    change: {
                        function: this.change,
                        params: {
                            inputFileMakerJS: this,
                            ...this.callbacks.change.params
            }}}});
            this.state.generate.appendChild(this.input.html);
        }
        if (!this.state.generate) {
            this.input = document.querySelector(`input#${ this.props.id }`);
            this.input.addEventListener('change', function (e) {
                instance.change({ files: files });
            });
        }
    }

    /**
     * * Set the InputFileMaker Span.
     * @memberof InputFileMaker
     */
    setMessage () {
        const instance = this;
        if (this.state.generate) {
            this.message = new HTMLCreatorJS('span', {
                props: {
                    id: `${ this.props.id }-message`,
                    classes: ((this.props.classes.hasOwnProperty('message') && this.props.classes.message.length) ? [...this.props.classes.message, 'input-message', 'pointer'] : ['input-message', 'pointer']),
                }, innerHTML: this.props.message,
            });
            this.message.html.addEventListener('click', function(e) {
                e.preventDefault();
                instance.click();
            });
            this.state.generate.appendChild(this.message.html);
        }
        if (!this.state.generate) {
            this.message = document.querySelector(`${ this.props.id }-message`);
            this.message.addEventListener('click', function(e) {
                e.preventDefault();
                instance.click();
            });
        }
    }

    /**
     * * Check if the Image must be updated or not
     * @memberof InputFileMaker
     */
    changeImage () {
        const instance = this;
        if (this.hasOwnProperty('image')) {
            if (this.files.length === 0) {
                this.removeImageURL();
            }
            if (FileReader && this.files.length) {
                let reader = new FileReader();

                if (this.files[0].type === 'image/png' || this.files[0].type === 'image/jpeg') {
                    reader.readAsDataURL(this.files[0]);
                    if (this.state.generate) {
                        this.image.setProps('url', false);
                        this.image.html.src = false;
                    }
                    if (!this.state.generate) {
                        this.image.src = false;
                    }
                }

                reader.onload = function (e) {
                    if (instance.state.generate) {
                        instance.image.setProps('url', reader.result);
                        instance.image.html.src = reader.result;
                    }
                    if (!instance.state.generate) {
                        instance.image.src = reader.result;
                    }
                };
            }
        }
    }

    /**
     * * Change the Span inner HTML.
     * @memberof InputFileMaker
     */
    changeText () {
        if (this.files.length) {
            this.message.html.innerHTML = this.files[0].name;
        } else {
            this.message.html.innerHTML = this.props.message;
        }
    }
    
    /**
     * * Remove the image.
     * @memberof InputFileMaker
     */
    removeImageURL () {
        if (this.state.generate) {
            this.image.setProps('url', false);
            this.image.html.src = false;
        }
        if (!this.state.generate) {
            this.image.src = false;
        }
    }

    /**
     * * Change the Input files.
     * @param {*} params Change callback function params.
     * @memberof InputFileMaker
     */
    change (params = {}) {
        if (!params.hasOwnProperty('inputFileMakerJS')) {
            this.files = [...params.files];
            this.changeImage();
            this.changeText();
            this.execute('change', {
                inputFileMakerJS: this,
                ...(Object.keys(params).length ? { ...this.callbacks.change.params, ...params } : { ...this.callbacks.change.params }),
            });
        }
        if (params.hasOwnProperty('inputFileMakerJS')) {
            params.inputFileMakerJS.files = [...params.files];
            params.inputFileMakerJS.changeImage();
            params.inputFileMakerJS.changeText();
            params.inputFileMakerJS.execute('change', {
                ...params
            });
        }
    }

    /**
     * * Click <input>.
     * @param {*} params Click callback function params.
     * @memberof InputFileMaker
     */
    click (params = {}) {
        if (!params.hasOwnProperty('inputFileMakerJS')) {
            if (this.state.generate) {
                this.input.html.click();
            } else {
                this.input.click();
            }
            this.execute('click', {
                inputFileMakerJS: this,
                ...(Object.keys(params).length ? { ...this.callbacks.click.params, ...params } : { ...this.callbacks.click.params }),
            })
        }
        if (params.hasOwnProperty('inputFileMakerJS')) {
            if (params.inputFileMakerJS.state.generate) {
                params.inputFileMakerJS.input.html.click();
            } else {
                params.inputFileMakerJS.input.click();
            }
            params.inputFileMakerJS.execute('click', {
                ...params
            })
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     */
    static props = {
        id: 'input-1',
        message: 'File not chosen',
        button: 'Select file',
        accept: [],
        name: 'file',
        classes: {
            button: [],
            image: [],
            input: [],
            button: [],
        },
    };
    
    /**
     * @static
     * @var {object} state Default state.
     */
    static state = {
        generate: false,
        disabled: false,
        image: false,
        // TODO: multiple: false,
    };
    
    /**
     * @static
     * @var {object} callbacks Default state.
     */
    static callbacks = {
        change: {
            function: function (params) { /* console.log(params) */ },
            params: {}
        }, click: {
            function: function (params) { /* console.log('clicked') */ },
            params: {}
        }
    };
};