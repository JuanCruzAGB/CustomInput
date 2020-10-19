/**
 * * InputFileMaker makes an excellent input type file.
 * @export
 * @class InputFileMaker
 */
export class InputFileMaker{
    /**
     * * Creates an instance of InputFileMaker.
     * @param {object} properties - InputFileMaker properties.
     * @memberof InputFileMaker
     */
    constructor(properties = {
        id: 'input-file-1'
    }, status = {
        image: false,
    }){
        this.setProperties(properties);
        this.setStatus(status);
        this.setHTML();
        this.checkImageStatus();
    }

    /**
     * * Set the InputFileMaker properties.
     * @param {object} properties - InputFileMaker properties.
     * @memberof InputFileMaker
     */
    setProperties(properties = {
        id: 'input-file-1'
    }){
        this.properties = {};
        this.setID(properties);
    }

    /**
     * * Set the InputFileMaker status.
     * @param {object} status - InputFileMaker status.
     * @memberof InputFileMaker
     */
    setStatus(status = {
        image: false,
    }){
        this.status = {};
        this.setImage(status);
    }

    /**
     * * Set the InputFileMaker ID.
     * @param {object} properties - InputFileMaker properties.
     * @memberof InputFileMaker
     */
    setID(properties = {
        id: 'input-file-1'
    }){
        this.properties.id = properties.id;
    }

    /**
     * * Set the InputFileMaker image status.
     * @param {object} status - InputFileMaker status.
     * @memberof InputFileMaker
     */
    setImage(status = {
        image: false,
    }){
        this.status.image = status.image;
    }

    /**
     * * Set the InputFileMaker HTML Element.
     * @memberof InputFileMaker
     */
    setHTML(){
        let instance = this;
        this.html = document.querySelector(`#${this.properties.id}`);
        if(!this.html.classList.contains('input-maked')){
            this.html.classList.add('input-maked');
        }
        this.html.addEventListener('change', function(){
            instance.update();
            if(instance.status.image){
                if(this.files.length == 0){
                    instance.remove();
                }
                instance.makeImage();
            }
        });
        this.makeInput();
    }

    /**
     * * Make the better "<input>".
     * @memberof InputFileMaker
     */
    makeInput(){
        let instance = this;
        let parent = this.html.parentNode;
        let div = document.createElement('div');
        div.classList.add('input-file');
        parent.insertBefore(div, this.html);
            let button = document.createElement('button');
            div.appendChild(button);
            if(this.html.dataset.text){
                button.innerHTML = this.html.dataset.text;
            }else{
                button.innerHTML = 'Select file';
            }
            button.classList.add('input-button');
            button.addEventListener('click', function(e){
                e.preventDefault();
                instance.execute();
            });
            let span = document.createElement('span');
            if(this.html.dataset.notfound){
                span.innerHTML = this.html.dataset.notfound;
                span.title = this.html.dataset.notfound;
            }else{
                span.innerHTML = 'File was not choosen';
                span.title = 'File was not choosen';
            }
            span.classList.add('input-text');
            div.appendChild(span);
            span.addEventListener('click', function(e){
                e.preventDefault();
                instance.execute();
            });
    }

    /**
     * * Execute the <input> click event.
     * @memberof InputFileMaker
     */
    execute(){
        this.html.click();
    }

    /**
     * * Make a <img>.
     * @memberof InputFileMaker
     */
    makeImage(){
        switch(typeof this.status.image){
            case 'string':
                this.createImageByString();
                break;
            default:
                this.createImageByFileReader();
                break;
        }
    }

    /**
     * * Create a <img> by a string given.
     * @memberof InputFileMaker
     */
    createImageByString(){
        let instance = this;
        let parent = this.html.parentNode;
        let img = document.createElement('img');
        
        this.status.created = true;
        img.alt = 'Example image';
        img.classList.add('input-img', 'generated-image');
        img.addEventListener('click', function(e){
            e.preventDefault();
            instance.execute();
        });
        parent.insertBefore(img, this.html);

        img.src = this.status.image;
    }

    /**
     * * Create a <img> by a FileReader.
     * @memberof InputFileMaker
     */
    createImageByFileReader(){
        let instance = this;
        let parent = this.html.parentNode;
        let img = document.createElement('img');

        if(FileReader && this.html.files && this.html.files.length){
            let reader = new FileReader();
            if(this.html.files[0].type == 'image/png' || this.html.files[0].type == 'image/jpeg'){
                reader.readAsDataURL(this.html.files[0]);
                if(!this.status.created){
                    this.status.created = true;
                    img = document.createElement('img');
                    img.alt = 'Example image';
                    img.classList.add('input-img');
                }else{
                    img = document.querySelector('.input-img');
                }
                if(!img.classList.contains('generated-image')){
                    img.classList.add('generated-image');
                    img.addEventListener('click', function(e){
                        e.preventDefault();
                        instance.execute();
                    });
                }
            }
            reader.onload = function(){
                img.src = reader.result;
                parent.insertBefore(img, instance.html);
            }
        }
    }

    /**
     * * Update the <input>.
     * @memberof InputFileMaker
     */
    update(){
        for(let i = 0; i < this.html.parentNode.children.length; i++){
            if(this.html.parentNode.children[i].classList.contains('input-file')){
                if(this.html.files.length){
                    this.html.parentNode.children[i].children[1].innerHTML = this.html.files[0].name;
                }else{
                    this.html.parentNode.children[i].children[1].innerHTML = this.html.dataset.notfound;
                }
            }
        }
    }
    
    /**
     * * Remove the <img>.
     * @memberof InputFileMaker
     */
    remove(){
        let parent = this.html.parentNode;
        if(document.querySelector('.file-img.generated-image')){
            parent.removeChild(document.querySelector('.file-img.generated-image'));
        }
        this.exist = false;
    }

    /**
     * * Check if the InputFileMaker has or not the image status.
     * @memberof InputFileMaker
     */
    checkImageStatus(){
        if(this.status.image){
            this.makeImage();
        }
    }
};