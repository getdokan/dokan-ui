import { Button, Modal } from '.';
import React, { useEffect, useState } from 'react';

export interface ConfirmModalProps {
  title?: string;
  message?: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
  okButtonLabel?: string;
  cancelButtonLabel?: string;
  className?: string;
}
const ConfirmModal = (props: ConfirmModalProps) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(props.isOpen);
  }, [props.isOpen]);

  return (
    <>
      <Modal
        isOpen={showModal}
        onClose={props.onCancel || (() => setShowModal(false))}
        showXButton={false}
        className="max-w-xl"
      >
        <Modal.Title>
          <div className="">
            <h3 className="text-lg text-gray-900">
              {props.title || 'Please Confirm'}
            </h3>
          </div>
        </Modal.Title>
        <Modal.Content>
          <div className="">
            <p className="text-gray-900 text-sm">
              {props.message || `Are you sure you want to perform this action?`}
            </p>
          </div>
        </Modal.Content>
        <Modal.Footer>
          <div className="flex justify-end space-x-4">
            <Button
              color="white"
              type="button"
              onClick={props.onCancel || (() => setShowModal(false))}
            >
              {props.cancelButtonLabel || 'No'}
            </Button>
            <Button color="primary" type="button" onClick={props.onConfirm}>
              {props.okButtonLabel || 'Yes'}
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
