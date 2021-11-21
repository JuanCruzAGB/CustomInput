// ? HTMLCreatorJS repository
import Html from "juancruzagb/htmlcreator/js/Core/Html";

// ? CustomInputJS repository
import File from "juancruzagb/custominput/js/Inputs/File/File";

/**
 * * CustomInput makes an excellent input.
 * @export
 * @class CustomInput
 * @extends Input
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export default class CustomInput extends Html {
    /**
     * * Creates an instance of CustomInput.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.id='input-1'] Primary key.
     * @param {string} [data.props.name='input-1']
     * @param {object} [data.props.classList] Class list.
     * @param {object} [data.states]
     * @param {boolean} [data.states.disabled=false] If the HTML Element should be disabled.
     * @param {object} [data.callbacks]
     * @param {HTMLElement} [data.parentNode] Html Element parent.
     * @memberof CustomInput
     */
    constructor (data = {
        props: {
            id: 'input-1',
            name: 'input-1',
            classList: [],
            type: 'file',
        }, state: {
            disabled: false,
        }, callbacks: {
            // 
        }, parentNode: false,
    }) {
        super();
        if (!data) {
            data = {};
        }
        if (!data.hasOwnProperty('type')) {
            data.type = 'file';
        }
        switch (data.type.toUpperCase()) {
            case 'FILE':
                return new File(data);
            default:
                console.warn(`CustomInut does not support ${ data.type } yet`);
                break;
        }
    }
};