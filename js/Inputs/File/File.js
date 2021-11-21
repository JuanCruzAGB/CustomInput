// ? JuanCruzAGB repository
import Class from "juancruzagb/src/js/Class";

// ? HTMLCreatorJS repository
import Button from "juancruzagb/htmlcreator/js/Buttons/Button";
import Input from "juancruzagb/htmlcreator/js/Buttons/Input";
import Span from "juancruzagb/htmlcreator/js/Texts/Span";
import Image from "juancruzagb/htmlcreator/js/Visuals/Image";

/**
 * * File creates an excellent <input type='file'>.
 * @export
 * @class File
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Class
 */
export default class File extends Class {
    /**
     * * Creates an instance of File.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='input-1'] Primary key.
     * @param {string} [data.props.name='input-1']
     * @param {object} [data.props.classList] Class list.
     * @param {object} [data.states]
     * @param {boolean} [data.state.disabled=false] If the HTML Element should be disabled.
     * @param {boolean} [data.state.hidden=false] If the HTML Element should be hidden.
     * @param {boolean} [data.state.multiple=false] If the HTML Element should accepts multiple files.
     * @param {boolean} [data.state.id=false] If the Html should print the id attribute.
     * @param {object} [data.callbacks]
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @param {object} [data.button] Custom Input File Button.
     * @param {object} [data.image] Custom Input File Image.
     * @param {object} [data.message] Custom Input File message.
     * @memberof File
     */
    constructor (data = {
        props: {
            accept: [],
            classList: [],
            id: 'input-1',
            name: 'input-1',
            type: 'file',
        }, state: {
            disabled: false,
            hidden: false,
            multiple: false,
            id: false,
        }, callbacks: {
            change: {
                function: (params) => { /* console.log(params) */ },
                params: {},
            }, click: {
                function: (params) => { /* console.log(params) */ },
                params: {},
            },
        },  parentNode: false,
        button: {
            props: {
                classList: [],
                id: 'button-1',
                title: false,
            }, state: {
                disabled: false,
                id: false,
                preventDefault: true,
            }, callbacks: {
                click: {
                    function: (params) => { /* console.log(params) */ },
                    params: {},
                },
            }, children: false,
        }, image: {
            props: {
                classList: [],
                id: 'image-1',
                name: 'Image genereted with HTMLCreatorJS',
                url: false,
            }, state: {
                id: false,
            }, callbacks: {
                click: {
                    function: (params) => { /* console.log(params) */ },
                    params: {},
                },
            },
        }, message: {
            props: {
                id: 'span-1',
                classList: [],
            }, state: {
                id: false,
            }, callbacks: {
                click: {
                    function: (params) => { /* console.log(params) */ },
                    params: {},
                },
            }, children: false,
        },
    }) {
        super();
        this.setCallbacks({
            ...File.callbacks,
            ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
        });
        this.setInput(data);
        if (data && data.hasOwnProperty('button') && data.button) {
            this.setButton({
                ...data.button,
                parentNode: data
                    ? (data.hasOwnProperty('parentNode') && !data.button.hasOwnProperty('parentNode'))
                        ? data.parentNode
                        : data.button.hasOwnProperty('parentNode')
                            ? data.button.parentNode
                            : false
                    : false,
            });
        }
        if (data && data.hasOwnProperty('image') && data.image) {
            this.setImage({
                ...data.image,
                parentNode: data
                    ? (data.hasOwnProperty('parentNode') && !data.image.hasOwnProperty('parentNode'))
                        ? data.parentNode
                        : data.image.hasOwnProperty('parentNode')
                            ? data.image.parentNode
                            : false
                    : false,
            });
        }
        if (data && data.hasOwnProperty('message') && data.message) {
            this.setMessage({
                ...data.message,
                parentNode: data
                    ? (data.hasOwnProperty('parentNode') && !data.message.hasOwnProperty('parentNode'))
                        ? data.parentNode
                        : data.message.hasOwnProperty('parentNode')
                            ? data.message.parentNode
                            : false
                    : false,
            });
        }
    };

    /**
     * * Saves the Input File <button>.
     * @param {object} [data]
     * @memberof File
     */
    setButton (data = {}) {
        if (!data) {
            data = {};
        }
        if (!data.hasOwnProperty('callbacks')) {
            data.callbacks = {};
        }
        data.callbacks.click = {
            function: (params) => { this.click(params) },
        };
        this.button = new Button(data);
    }

    /**
     * * Saves the Input File <img>.
     * @param {object} [data]
     * @memberof File
     */
    setImage (data = {}) {
        if (!data) {
            data = {};
        }
        if (!data.hasOwnProperty('callbacks')) {
            data.callbacks = {};
        }
        data.callbacks.click = {
            function: (params) => { this.click(params) },
        };
        console.log(data);
        this.image = new Image(data);
        console.log(this.image);
    }

    /**
     * * Saves the Input File <input>.
     * @param {object} [data]
     * @memberof File
     */
    setInput (data = {}) {
        if (!data) {
            data = {};
        }
        if (!data.hasOwnProperty('props')) {
            data.props = {};
        }
        data.props.type = 'file';
        if (!data.hasOwnProperty('callbacks')) {
            data.callbacks = {};
        }
        data.callbacks.change = {
            function: (params) => { this.change(params) },
        };
        this.input = new Input(data);
    }

    /**
     * * Saves the Input File <span>.
     * @param {object} [data]
     * @memberof File
     */
    setMessage (data = {}) {
        if (!data) {
            data = {};
        }
        if (!data.hasOwnProperty('callbacks')) {
            data.callbacks = {};
        }
        data.callbacks.click = {
            function: (params) => { this.click(params) },
        };
        this.message = new Span(data);
    }

    /**
     * * Html change callback.
     * @param {*} [params={}] Change callback function optional params
     * @memberof Html
     */
    change (params = {}) {
        this.update(this.input.html.files[0]),
        this.execute('change', {
            ...params,
            File: this,
            files: this.input.html.files,
        });
    }

    /**
     * * Html click callback.
     * @param {*} [params={}] Click callback function optional params
     * @memberof Html
     */
    click (params = {}) {
        this.input.html.click();
        this.execute('click', {
            ...params,
            File: this,
        });
    }

    update (route = false, params = {}) {
        if (this.hasOwnProperty('image')) {
            console.log(route);
            // if (this.files.length === 0) {
            //     this.removeImageURL();
            //     this.hideImage();
            // }
            // if (FileReader && this.files.length) {
            //     let reader = new FileReader();

            //     if (this.props.accept.length) {
            //         this.removeImageURL();
            //         this.hideImage();
            //         for (const type of this.props.accept) {
            //             if (this.files[0].type === type) {
            //                 reader.readAsDataURL(this.files[0]);
            //             }
            //         }
            //     }
            //     if (!this.props.accept.length) {
            //         this.removeImageURL();
            //         this.hideImage();
            //         if (this.files[0].type === 'image/png' || this.files[0].type === 'image/jpeg') {
            //             reader.readAsDataURL(this.files[0]);
            //         }
            //     }

            //     reader.onload = function (e) {
            //         if (instance.state.generate) {
            //             instance.image.setProps('url', reader.result);
            //             instance.image.html.src = reader.result;
            //         }
            //         if (!instance.state.generate) {
            //             instance.image.src = reader.result;
            //         }
            //         instance.showImage();
            //     };
            // }
        }
    }

    changeText () {
        if (this.files.length) {
            this.message.html.innerHTML = this.files[0].name;
        } else {
            this.message.html.innerHTML = this.props.message;
        }
    }

    /**
     * @static
     * @var {object} callbacks Default callbacks.
     * @memberof File
     */
    static callbacks = {
        change: {
            function: (params) => { /* console.log(params) */ },
            params: {}
        }, click: {
            function: (params) => { /* console.log(params) */ },
            params: {}
        },
    }

    /**
     * @static
     * @var {Button} Button Button class child.
     * @memberof File
     */
    static Button = Button;

    /**
     * @static
     * @var {Image} Image Image class child.
     * @memberof File
     */
    static Image = Image;

    /**
     * @static
     * @var {Input} Input Input class child.
     * @memberof File
     */
    static Input = Input;

    /**
     * @static
     * @var {Span} Span Span class child.
     * @memberof File
     */
    static Span = Span;
}