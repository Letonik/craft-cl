import React, {useState} from 'react';
import styled from "styled-components";
import Dropzone from "react-dropzone";
import {useMutate} from 'restful-react';
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 5,
};

const Btn = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: center;
`;


function ModalCreater({open, handleClose, onChange}) {
  const [file, setFile] = useState(undefined)
  const { mutate: uploadImage } = useMutate({
    verb: 'POST',
    path: 'edit/add-image'
  });
  const changeImage = async () => {
    let formData = new FormData();
    formData.append('image', file[0]);
    const imageName = await uploadImage(formData)
    onChange('http://localhost:5000/' + imageName)
    handleClose()
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <form noValidate autoComplete="off">
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
        </Box>
      </Modal>
    </div>
  );
}


export const ToolbarImage = ({ title, value, onChange }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {setOpen(true);};
  const handleClose = () => {setOpen(false);};
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
      <ModalCreater open={open} handleClose={handleClose} value={value} onChange={onChange}/>
      </>

/*  <InputLabel>{title}</InputLabel>
  <Select native value={value} onChange={(e) => onChange(e.target.value)}>
    {children}
  </Select>*/


  );
};
