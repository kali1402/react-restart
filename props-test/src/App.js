import React, { useState } from 'react';
import Button from './components/button';
import Dialog from './components/dialog';


function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  }
  const onDelete = () => {
    setDialog(false);
  }
  const onCancel = () => {
    setDialog(false);
  }
  return (
    <>
      <Button color="white" backcolor="black" onClick={onClick}>삭제</Button>
      <Dialog
        title="정말로 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
        visible={dialog}
        onDelete={onDelete}
        onCancel={onCancel} />
    </>
  )
}

export default App;
