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
     * @param {string} [props.notFoundMessage='File not chosen'] Not found message.
     * @param {string} [props.text='Select file'] Button text.
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
        notFoundMessage: 'File not chosen',
        text: 'Select file',
        accept: [],
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
        this.setButton();
        this.setImage();
        this.setInput();
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
                    title: this.props.text,
                    classes: [...this.props.classes.button, 'input-button'],
                }, state: {
                    preventDefault: true,
                    disabled: this.state.disabled,
                }, callback: {
                    function: instance.click,
                    params: {
                        inputFileMakerJS: this,
                }}, innerHTML: new HTMLCreatorJS('span', {
                    props: {},
                    innerHTML: this.props.text,
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
                    classes: [...this.props.classes.image, 'input-img'],
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
                    classes: [...this.props.classes.input],
                    accept: this.props.accept,
                }, state: {
                    disabled: this.state.disabled
                }, callbacks: {
                    change: {
                        function: this.change,
                        params: {
                            inputFileMakerJS: this,
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
                    classes: [...this.props.classes.message, 'input-text'],
                }, innerHTML: this.props.notFoundMessage,
            });
            this.message.html.addEventListener('click', function(e) {
                e.preventDefault();
                instance.click();
            });
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

                reader.onload = function() {
                    if (this.state.generate) {
                        this.image.setProps('url', reader.result);
                        this.image.html.src = reader.result;
                    }
                    if (!this.state.generate) {
                        this.image.src = reader.result;
                    }
                }
            }
        }
    }

    /**
     * * Change the Span inner HTML.
     * @memberof InputFileMaker
     */
    changeText () {
        if (this.files.length) {
            this.message.innerHTML = this.files[0].name;
        } else {
            this.message.innerHTML = this.props.notFoundMessage;
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
        this.files = [...params.files];
        this.changeImage();
        this.changeText();
        this.execute('change', {
            inputFileMakerJS: this,
            ...params
        });
    }

    /**
     * * Click <input>.
     * @param {*} params Click callback function params.
     * @memberof InputFileMaker
     */
    click (params = {}) {
        if (this.state.generate) {
            this.input.html.click();
        } else {
            this.input.click();
        }
        this.execute('click', {
            inputFileMakerJS: this,
            ...params
        })
    }

    /**
     * @static
     * @var {object} props Default properties.
     */
    static props = {
        id: 'input-1',
        notFoundMessage: 'File not chosen',
        text: 'Select file',
        accept: [],
        name: 'file',
        classes: {
            button: [],
            image: [],
            input: [],
            text: [],
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