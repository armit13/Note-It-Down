import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditorComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            title: '',
            id: '',
            update: ""
        };
    }

    componentDidMount = () => {
        this.setState({
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id,
            update: this.props.selectedNote.timestamp
                ? this.props.selectedNote.timestamp.toDate()
                : new Date()
        });
    };

    componentDidUpdate = () => {
        if(this.props.selectedNote.id !== this.state.id)
        {
            this.setState({
                text: this.props.selectedNote.body,
                title: this.props.selectedNote.title,
                id: this.props.selectedNote.id,
                update: this.props.selectedNote.timestamp
                    ? this.props.selectedNote.timestamp.toDate()
                    : new Date()
            });
        }
    }

    render() { 

        const { classes } = this.props ;

        return ( 
            <div className = {classes.editorContainer}>
                <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
                <input 
                    className={classes.titleInput}
                    placeholder='Note title...'
                    value={this.state.title? this.state.title : ''}
                    onChange={(e) => this.updateTitle(e.target.value)}>
                </input>
                <input 
                    className={classes.timeInput}
                    value={"Last Updated On : " + this.state.update.toString()}
                    onChange={e => this.updateDate(e.target.value)}
                    readonly="readonly"
                >
                </input>
                <ReactQuill
                    value = {this.state.text}
                    onChange = {this.updateBody}
                    modules={EditorComponent.modules}
                    formats={EditorComponent.formats}
                >
                </ReactQuill>
            </div>
        );
    }

    updateBody = async (val) => {
       await this.setState({ text: val }); 
       this.update();
    };
    
    updateDate = async val => {
        await this.setState({ update: val });
        this.update();
      };

    updateTitle = async (txt) => {
        await this.setState({title: txt});
        this.update();
    }

    update = debounce(() => {
        this.props.noteUpdate(this.state.id, {
            title: this.state.title,
            body: this.state.text
        })
    }, 1500);
}
 
EditorComponent.modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{align: null},{align: 'center'},{align: 'right'},{align: 'justify'}],
      ["blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      [{ 'color': [] }, { 'background': [] }], 
      ["link", "image", "video"],
      ["clean"]
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    }
  };
  
  EditorComponent.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "code-block",
    "color",
    "background",
    "align"
  ];


// this.props.classes.className
export default withStyles(styles)(EditorComponent);