let InputFileMaker = {
    /** @var {HTMLElement[]} inputs - Array of Inputs type file. */
    inputs: [],
    /** @var {object} image - Image functions. */
    image: {
        /** @var {boolean} exist - Check if the image was generated or not. */
        exist: false,
        /**
         * Create a new image.
         * @param {HTMLElement} input - The input.
         */
        create(input){
            if(FileReader && input.files && input.files.length){
                let parent = input.parentNode;
                let img;
                let reader = new FileReader();
                reader.onload = function(){
                    img.src = reader.result;
                }
                if(input.files[0].type == 'image/png' || input.files[0].type == 'image/jpeg'){
                    reader.readAsDataURL(input.files[0]);
                    if(!this.exist){
                        this.exist = true;
                        img = document.createElement('img');
                        img.alt = 'Example image';
                        img.classList.add('file-img');
                    }else{
                        img = document.querySelector('.file-img');
                    }
                    if(!img.classList.contains('generated-image')){
                        img.classList.add('generated-image');
                        img.addEventListener('click', function(e){
                            e.preventDefault();
                            InputFileMaker.execute(input);
                        });
                    }
                    parent.insertBefore(img, input);
                }
            }else{
                // PENDIENTE
            }
        },
        /**
         * Generate an default image.
         * @param {HTMLElemeny} input - The input.
         */
        generate(input){
            let parent = input.parentNode;
            this.exist = true;
            let img = document.createElement('img');
            img.alt = 'Example image';
            img.classList.add('file-img');
            img.classList.add('generated-image');
            img.src = input.dataset.src;
            img.addEventListener('click', function(e){
                e.preventDefault();
                InputFileMaker.execute(input);
            });
            parent.insertBefore(img, input);
        },
        /**
         * Remove a previous image.
         * @param {HTMLElement} image - The image.
         */
        remove(image){
            let parent = image.parentNode;
            if(document.querySelector('.file-img.generated-image')){
                parent.removeChild(document.querySelector('.file-img.generated-image'));
            }
            this.exist = false;
        },
    },
    /** InputFileMaker loader. */
    load(){
        this.inputs = document.querySelectorAll('.make-a-file');
        for(let i = 0; i < this.inputs.length; i++){
            InputFileMaker.make(this.inputs[i]);
            if(this.inputs[i].classList.contains('make-an-image') && this.inputs[i].hasAttribute('data-src')){
                this.image.generate(this.inputs[i]);
            }
            this.inputs[i].addEventListener('change', function(){
                InputFileMaker.update(this);
                if(this.classList.contains('make-an-image')){
                    if(this.files.length == 0){
                        InputFileMaker.image.remove(this);
                    }
                    InputFileMaker.image.create(this);
                }
            });
        }
    },
    /**
     * Make the file substitute.
     * @param {HTMLElement} input - The input.
     */
    make(input){
        let parent = input.parentNode;
        let div = document.createElement('div');
        div.classList.add('input-file');
        parent.insertBefore(div, input);
            let button = document.createElement('button');
            button.innerHTML = input.dataset.text;
            button.classList.add('file-button');
            div.appendChild(button);
            button.addEventListener('click', function(e){
                e.preventDefault();
                InputFileMaker.execute(input);
            });
            let span = document.createElement('span');
            span.innerHTML = input.dataset.notfound;
            span.classList.add('file-text');
            span.title = input.dataset.notfound;
            div.appendChild(span);
            span.addEventListener('click', function(e){
                e.preventDefault();
                InputFileMaker.execute(input);
            });
    },
    /**
     * Execute the correct input.
     * @param {HTMLElement} input - The input.
     */
    execute(input){
        input.click();
    },
    /**
     * Update the text.
     * @param {HTMLElement} input - The input.
     */
    update(input){
        for(let i = 0; i < input.parentNode.children.length; i++){
            if(input.parentNode.children[i].classList.contains('input-file')){
                if(input.files.length){
                    input.parentNode.children[i].children[1].innerHTML = input.files[0].name;
                }else{
                    input.parentNode.children[i].children[1].innerHTML = input.dataset.notfound;
                }
            }
        }
    },
};
document.addEventListener('DOMContentLoaded', function(){
    InputFileMaker.load();
});