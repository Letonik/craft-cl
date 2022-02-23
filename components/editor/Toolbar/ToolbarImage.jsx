import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import {tempsAPI} from "../../../api/api";


const Drop = styled.div`
  .dropzone {
  text-align: center;
  padding: 20px;
  border: 3px dashed #eeeeee;
  background-color: #fafafa;
  height: 200px;
  width: 400px;
  color: #bdbdbd;

  margin-bottom: 20px;
}
`;


function DropImage({setFile}) {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles)
    setFileNames(acceptedFiles.map(file => file.name));
  }

  return (
    <Drop>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Перенесите изображение или кликните на выделенную область, чтобы выбрать его...</p>
          </div>
        )}
      </Dropzone>
      <div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
    </Drop>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    marginTop: '13vh',
    height: '370px',
    justifyContent: 'center',
    position: "relative"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '3px',
    position: "relative",
  },
}));

const Btn = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: center;
`;


function ModalCreater({open, handleClose}) {
  const [file, setFile] = useState(undefined)
  console.log(file)
  const classes = useStyles();
  const changeImage = async () => {
    let formData = new FormData();
/*    formData.append('image', file[i]);*/
    for(let i=0; i < file.length; i++){
      formData.append('image', file[i]);
    }
    const response = await tempsAPI.saveImage(formData)
    debugger
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <DropImage setFile={setFile}/>
              <Btn>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#13c2c2",
                    color: '#fff',
                    marginRight: '20px'
                  }}
                  onClick={changeImage}
                >
                  ПРИМЕНИТЬ
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#FFB219",
                    color: '#fff'
                  }}
                  onClick={handleClose}
                >
                  ОТМЕНИТЬ
                </Button>
              </Btn>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


export const ToolbarImage = ({ title, value, onChange }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Button
      variant="contained"
      style={{
        backgroundColor: "#ff1919",
        color: '#fff'
      }}
      onClick={handleOpen}
    >
      ИЗМЕНИТЬ ИЗОБРАЖЕНИЕ
    </Button>
      <ModalCreater open={open} handleClose={handleClose}/>
      </>

/*  <InputLabel>{title}</InputLabel>
  <Select native value={value} onChange={(e) => onChange(e.target.value)}>
    {children}
  </Select>*/


  );
};
