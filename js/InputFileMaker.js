// ? Local repository
import { HTMLCreator as HTMLCreatorJS } from "../../HTMLCreatorJS/js/HTMLCreator.js";

/**
 * * InputFileMaker makes an excellent input type file.
 * @export
 * @class InputFileMaker
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class InputFileMaker{
    /**
     * * Creates an instance of InputFileMaker.
     * @param {Object} [properties] InputFileMaker properties:
     * @param {String} [properties.id] InputFileMaker ID.
     * @param {String} [properties.notFoundMessage] InputFileMaker not found message.
     * @param {String} [properties.text] InputFileMaker button text.
     * @param {String[]} [properties.accept] InputFileMaker input mimetype accepted.
     * @param {Object} [states] InputFileMaker states:
     * @param {Boolean} [states.generate] InputFileMaker create input boolean.
     * @param {Boolean} [states.disabled] InputFileMaker disabled boolean.
     * @param {Boolean} [states.image] InputFileMaker create image boolean.
     * @param {Boolean} [states.multiple] InputFileMaker accept multiple files boolean.
     * @param {Object} [callback] InputFileMaker callback:
     * @param {Function} [callback.function] InputFileMaker callback function.
     * @param {Object} [callback.params] InputFileMaker callback params.
     * @param {Object} [button] InputFileMaker button properties.
     * @memberof InputFileMaker
     */
    constructor(properties = {
        id: 'input-file-1',
        notFoundMessage: 'File not chosen',
        text: 'Select file',
        accept: [],
    }, states = {
        generate: false,
        disabled: false,
        image: false,
        multiple: false,
    }, callback = {
        function: function(){ /* console.log('clicked') */ },
        params: {
            //
        },
    }, button = {}){
        this.setProperties(properties);
        this.setStates(states);
        this.setCallback(callback);
        this.setButton(button);
        this.setSpan();
        this.checkGenerateStatus();
        this.checkImageStatus();
    }

    /**
     * * Set the InputFileMaker properties.
     * @param {Object} [properties] InputFileMaker properties:
     * @param {String} [properties.id] InputFileMaker ID.
     * @param {String} [properties.notFoundMessage] InputFileMaker not found message.
     * @param {String} [properties.text] InputFileMaker button text.
     * @param {String[]} [properties.accept] InputFileMaker input mimetype accepted.
     * @memberof InputFileMaker
     */
    setProperties(properties = {
        id: 'input-file-1',
        notFoundMessage: 'File not chosen',
        text: 'Select file',
        accept: [],
    }){
        this.properties = {};
        this.setIDProperty(properties);
        this.setNotFoundMessageProperty(properties);
        this.setTextProperty(properties);
        this.setAcceptProperty(properties);
    }

    /**
     * * Returns the InputFileMaker properties or an specific property.
     * @param {String} [name] Property name.
     * @returns {Object|*}
     * @memberof InputFileMaker
     */
    getProperties(name = ''){
        if (name && name != '') {
            return this.properties[name];
        } else {
            return this.properties;
        }
    }

    /**
     * * Check if there is a property.
     * @param {String} name Property name.
     * @returns {Boolean}
     * @memberof InputFileMaker
     */
    hasProperty(name = ''){
        if (this.properties.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a property value.
     * @param {String} name Property name.
     * @param {*} value Property value.
     * @memberof InputFileMaker
     */
    changeProperty(name = '', value = ''){
        if (this.hasProperty(name)) {
            this.properties[name] = value;
        }
        switch (name) {
            case 'title':
                if (this.hasProperty('title')) {
                    this.html.title = this.getProperties('title');
                }
                break;
        }
    }

    /**
     * * Set the InputFileMaker ID.
     * @param {Object} [properties] InputFileMaker properties:
     * @param {String} [properties.id] InputFileMaker ID.
     * @memberof InputFileMaker
     */
    setIDProperty(properties = {
        id: 'input-file-1',
    }){
        if (properties.hasOwnProperty('id')) {
            this.properties.id = properties.id;
        } else {
            this.properties.id = 'input-file-1';
        }
    }

    /**
     * * Returns the InputFileMaker ID.
     * @returns {String}
     * @memberof InputFileMaker
     */
    getIDProperty(){
        return this.properties.id;
    }

    /**
     * * Set the InputFileMaker not found message.
     * @param {Object} [properties] InputFileMaker properties:
     * @param {String} [properties.notFoundMessage] InputFileMaker not found message.
     * @memberof InputFileMaker
     */
    setNotFoundMessageProperty(properties = {
        notFoundMessage: 'File not chosen',
    }){
        if (properties.hasOwnProperty('notFoundMessage')) {
            this.properties.notFoundMessage = properties.notFoundMessage;
        } else {
            this.properties.notFoundMessage = 'File not chosen';
        }
    }

    /**
     * * Returns the InputFileMaker not found message.
     * @returns {String}
     * @memberof InputFileMaker
     */
    getNotFoundMessageProperty(){
        return this.properties.notFoundMessage;
    }

    /**
     * * Set the InputFileMaker text.
     * @param {Object} [properties] InputFileMaker properties:
     * @param {String} [properties.notFoundMessage] InputFileMaker text.
     * @memberof InputFileMaker
     */
    setTextProperty(properties = {
        text: 'Select file',
    }){
        if (properties.hasOwnProperty('text')) {
            this.properties.text = properties.text;
        } else {
            this.properties.text = 'Select file';
        }
    }

    /**
     * * Returns the InputFileMaker text.
     * @returns {String}
     * @memberof InputFileMaker
     */
    getTextProperty(){
        return this.properties.text;
    }

    /**
     * * Set the InputFileMaker input mimetype accepted.
     * @param {Object} [properties] InputFileMaker properties:
     * @param {String[]} [properties.accept] InputFileMaker input mimetype accepted.
     * @memberof InputFileMaker
     */
    setAcceptProperty(properties = {
        accept: [],
    }){
        if (properties.hasOwnProperty('accept')) {
            this.properties.accept = properties.accept;
        } else {
            this.properties.accept = [];
        }
    }

    /**
     * * Returns the InputFileMaker input mimetype accepted.
     * @returns {String}
     * @memberof InputFileMaker
     */
    getAcceptProperty(){
        return this.properties.accept;
    }

    /**
     * * Set the InputFileMaker states.
     * @param {Object} [states] InputFileMaker states:
     * @param {Boolean} [states.generate] InputFileMaker create input boolean.
     * @param {Boolean} [states.disabled] InputFileMaker disabled boolean.
     * @param {Boolean} [states.image] InputFileMaker create image boolean.
     * @param {Boolean} [states.multiple] InputFileMaker accept multiple files boolean.
     * @memberof InputFileMaker
     */
    setStates(states = {
        generate: false,
        disabled: false,
        image: false,
        multiple: false,
    }){
        this.states = {};
        this.setGenerateStatus(states);
        this.setDisabledStatus(states);
        this.setImageStatus(states);
        this.setCreatedStatus(states);
        this.setMultipleStatus(states);
    }

    /**
     * * Returns the InputFileMaker states or an specific states.
     * @param {String} [property] States name.
     * @returns {Object|*}
     * @memberof InputFileMaker
     */
    getStates(property = ''){
        if (property && property != '') {
            return this.states[property];
        } else {
            return this.states;
        }
    }

    /**
     * * Check if there is a status.
     * @param {String} name Status name.
     * @returns {Boolean}
     * @memberof InputFileMaker
     */
    hasStates(name = ''){
        if (this.status.hasOwnProperty(name)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * * Change a status value.
     * @param {String} name Status name.
     * @param {*} value Status value.
     * @memberof InputFileMaker
     */
    changeStatus(name = '', value = ''){
        if (this.hasStates(name)) {
            this.states[name] = value;
        }
        switch (name) {
            default:
                break;
        }
    }

    /**
     * * Set the InputFileMaker create input boolean status.
     * @param {Object} [states] InputFileMaker states:
     * @param {Boolean} [states.generate] InputFileMaker create input boolean.
     * @memberof InputFileMaker
     */
    setGenerateStatus(states = {
        generate: false,
    }){
        if (states.hasOwnProperty('generate')) {
            this.states.generate = states.generate;
        } else {
            this.states.generate = false;
        }
    }

    /**
     * * Returns the InputFileMaker create input boolean status.
     * @returns {Boolean}
     * @memberof InputFileMaker
     */
    getGenerateStatus(){
        return this.states.generate;
    }

    /**
     * * Set the InputFileMaker disabled boolean status.
     * @param {Object} [states] InputFileMaker states:
     * @param {Boolean} [states.disabled] InputFileMaker disabled boolean.
     * @memberof InputFileMaker
     */
    setDisabledStatus(states = {
        disabled: false,
    }){
        if (states.hasOwnProperty('disabled')) {
            this.states.disabled = states.disabled;
        } else {
            this.states.disabled = false;
        }
    }

    /**
     * * Returns the InputFileMaker disabled boolean status.
     * @returns {Boolean}
     * @memberof InputFileMaker
     */
    getDisabledStatus(){
        return this.states.disabled;
    }

    /**
     * * Check if the InputFileMaker has or not the input status.
     * @memberof InputFileMaker
     */
    checkGenerateStatus(){
        if (this.getStates('input')) {
            this.setHTML();
        } else {
            this.setInput();
        }
    }

    /**
     * * Set the InputFileMaker create image boolean status.
     * @param {Object} [states] InputFileMaker states:
     * @param {Boolean} [states.image] InputFileMaker create image boolean.
     * @memberof InputFileMaker
     */
    setImageStatus(states = {
        image: false,
    }){
        if (states.hasOwnProperty('image')) {
            this.states.image = states.image;
        } else {
            this.states.image = false;
        }
    }

    /**
     * * Returns the InputFileMaker create image boolean status.
     * @returns {Boolean}
     * @memberof InputFileMaker
     */
    getImageStatus(){
        return this.states.image;
    }

    /**
     * * Check if the InputFileMaker has or not the image status.
     * @memberof InputFileMaker
     */
    checkImageStatus(){
        if (this.getStates('image')) {
            this.setImage();
        }
    }

    /**
     * * Set the InputFileMaker created boolean status.
     * @param {Object} [states] InputFileMaker states:
     * @param {Boolean} [states.created] InputFileMaker created boolean.
     * @memberof InputFileMaker
     */
    setCreatedStatus(states = {
        created: false,
    }){
        if (states.hasOwnProperty('created')) {
            this.states.created = states.created;
        } else {
            this.states.created = false;
        }
    }

    /**
     * * Returns the InputFileMaker created boolean status.
     * @returns {Boolean}
     * @memberof InputFileMaker
     */
    getCreatedStatus(){
        return this.states.created;
    }

    /**
     * * Set the InputFileMaker accept multiple files boolean.
     * @param {Object} [states] InputFileMaker states:
     * @param {Boolean} [states.multiple] InputFileMaker accept multiple files boolean.
     * @memberof InputFileMaker
     */
    setMultipleStatus(states = {
        multiple: false,
    }){
        if (states.hasOwnProperty('multiple')) {
            this.states.multiple = states.multiple;
        } else {
            this.states.multiple = false;
        }
    }

    /**
     * * Returns the InputFileMaker accept multiple files boolean.
     * @returns {Boolean}
     * @memberof InputFileMaker
     */
    getMultipleStatus(){
        return this.states.multiple;
    }

    /**
     * * Set the InputFileMaker callback.
     * @param {Object} [callback] InputFileMaker callback:
     * @param {Function} [callback.function] InputFileMaker callback function.
     * @param {Object} [callback.params] InputFileMaker callback params.
     * @memberof InputFileMaker
     */
    setCallback(callback = {
        function: function(params) { /* console.log(params); */ },
        params: [
            //
        ],
    }){
        this.callback = {
            function: (callback.hasOwnProperty('function')) ? callback.function : function(){ /* console.log('clicked') */ },
            params: (callback.hasOwnProperty('params')) ? callback.params : {},
        };
    }

    /**
     * * Returns the InputFileMaker callback.
     * @returns {Object}
     * @memberof InputFileMaker
     */
    getCallback(){
        return this.callback;
    }

    /**
     * * Set the InputFileMaker HTML Element.
     * @memberof InputFileMaker
     */
    setHTML(){
        let instance = this;
        this.html = document.querySelector(`#${ this.getProperties('id') }`);
        if (!this.html.classList.contains('input-transformed')) {
            this.html.classList.add('input-transformed');
        }

        this.html.addEventListener('change', function(){
            instance.update();
            if (instance.getStates('image')) {
                if (this.files.length == 0) {
                    instance.remove();
                }
                instance.checkImageStatus();
            }
        });

        let div = document.createElement('div');
        div.classList.add('input-file');
        let parent = this.getHTML().parentNode;
        parent.insertBefore(div, this.getHTML());

        div.appendChild(this.button.getHTML());
        div.appendChild(this.span.getHTML());
    }

    /**
     * * Returns the <input> HTML Element.
     * @returns {HTMLElement}
     * @memberof InputFileMaker
     */
    getHTML(){
        return this.html;
    }

    /**
     * * Set the InputFileMaker Input.
     * @memberof InputFileMaker
     */
    setInput(){
        let instance = this;

        this.input = new HTMLCreatorJS('input', {
            properties: {
                id: this.getProperties('id'),
                type: 'file',
                name: this.getProperties('name'),
                classes: [],
                accept: this.getProperties('accept'),
        }, states: {
            multiple: this.getStates('multiple'),
        }});

        this.input.getHTML().addEventListener('change', function(){
            instance.update();
            if (instance.getStates('image')) {
                if (this.files.length == 0) {
                    instance.remove();
                }
                instance.checkImageStatus();
            }
        });
    }

    /**
     * * Returns the InputFileMaker Input.
     * @returns {Input}
     * @memberof InputFileMaker
     */
    getInput(){
        return this.input;
    }

    /**
     * * Set the InputFileMaker Button.
     * @param {Object} [button] InputFileMaker button properties.
     * @memberof InputFileMaker
     */
    setButton(button = {}){
        this.button = new HTMLCreatorJS('button', {
            properties: ((button.hasOwnProperty('properties')) ? button.properties : {
                id: 'button-1',
                title: this.getProperties('text'),
                classes: ['input-button'],
            }), states: {
                preventDefault: true,
                disabled: this.getStates('disabled'),
            }, callback: {
                function: InputFileMaker.execute,
                params: {
                    inputfilemaker: this,
                },
        }, innerHTML: ((button.hasOwnProperty('innerHTML')) ? button.innerHTML : new HTMLCreatorJS('span', {
            properties: {
                //
            }, innerHTML: this.getProperties('text'),
        }).getHTML())});
    }

    /**
     * * Returns the InputFileMaker Button.
     * @returns {Button}
     * @memberof InputFileMaker
     */
    getButton(){
        return this.button;
    }

    /**
     * * Set the InputFileMaker Span.
     * @memberof InputFileMaker
     */
    setSpan(){
        let instance = this;

        this.span = new HTMLCreatorJS('span', {
            properties: {
                id: 'message-1',
                classes: ['input-text'],
        }, innerHTML: this.getProperties('notFoundMessage'),});

        this.span.getHTML().addEventListener('click', function(e){
            e.preventDefault();
            InputFileMaker.execute({
                inputfilemaker: instance,
            });
        });
    }

    /**
     * * Returns the InputFileMaker Span.
     * @returns {Span}
     * @memberof InputFileMaker
     */
    getSpan(){
        return this.span;
    }

    /**
     * * Set the InputFileMaker Image.
     * @memberof InputFileMaker
     */
    setImage(){
        let instance = this;
        let parent = this.getHTML().parentNode;

        switch(typeof this.getStates('image')){
            case 'string':
                this.image = new HTMLCreatorJS('img', {
                    properties: {
                        id: 'img-1',
                        url: this.getStates('image'),
                        name: 'Image genereted with InputFileMakerJS',
                        classes: ['input-img', 'generated-image'],
                }});
                parent.insertBefore(this.image.getHTML(), this.getHTML());
                break;
            default:
                if (FileReader && this.files && this.files.length) {
                    let reader = new FileReader();

                    if (this.files[0].type == 'image/png' || this.files[0].type == 'image/jpeg') {
                        reader.readAsDataURL(this.files[0]);
                        this.image = new HTMLCreatorJS('img', {
                            properties: {
                                id: 'img-1',
                                url: this.getStates('image'),
                                name: 'Image genereted with InputFileMakerJS',
                                classes: ['input-img', 'generated-image'],
                        }});
                    }

                    reader.onload = function(){
                        this.image.changeProperty('url', reader.result);
                        parent.insertBefore(this.image.getHTML(), instance.html);
                    }
                }
                break;
        }
                
        this.image.getHTML().addEventListener('click', function(e){
            e.preventDefault();
            InputFileMaker.execute({
                inputfilemaker: instance,
            });
        });
        this.changeStatus('created', true);
    }

    /**
     * * Returns the InputFileMaker Image.
     * @returns {Image}
     * @memberof InputFileMaker
     */
    getImage(){
        return this.image;
    }

    /**
     * * Update the <input>.
     * @memberof InputFileMaker
     */
    update(){
        if (this.getStates('generate')) {
            this.files = this.getInput().getHTML().files;
        } else {
            this.files = this.getHTML().files;
        }
        if (this.files.length) {
            this.getSpan().getHTML().innerHTML = this.files[0].name;
        } else {
            this.getSpan().getHTML().innerHTML = this.getProperties('notFoundMessage');
        }
        let params = this.getCallback().params;
        params.inputfilemaker = this;
        this.getCallback().function(params);
    }
    
    /**
     * * Remove the image.
     * @memberof InputFileMaker
     */
    remove(){
        let parent = this.getHTML().parentNode;
        if (this.getStates('created')) {
            this.changeStatus('created', false);
            parent.removeChild(this.image.getHTML());
            delete this.image;
        }
    }

    /**
     * * Execute the <input> click event.
     * @param {Object} params Execution parameters.
     * @memberof InputFileMaker
     */
    static execute(params = {}){
        if (params.inputfilemaker.getStates('generate')) {
            params.inputfilemaker.getInput().getHTML().click();
        } else {
            params.inputfilemaker.getHTML().click();
        }
    }
};