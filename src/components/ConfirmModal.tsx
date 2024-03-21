import { ReactNode, useEffect, useState } from 'react';
import type { ComponentProps } from 'react';
import Modal from './Modal';
import Button from './Button';

interface ConfirmModalProps {
  title?: string;
  message?: string | ReactNode;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
  okButtonLabel?: string;
  cancelButtonLabel?: string;
  okButtonColor?: ComponentProps<typeof Button>['color'];
  showXButton?: boolean;
  isConfirmButtonLoading?: boolean;
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
        showXButton={props?.showXButton ?? false}
        className="max-w-xl"
      >
        <Modal.Title>
          <div className="">
            <h3 className="text-lg text-gray-900">{props.title || 'Please Confirm'}</h3>
          </div>
        </Modal.Title>
        <Modal.Content className="pb-0 pt-0">
          <div className="">
            {typeof props.message === 'string' ? (
              <p className="text-sm text-gray-500">
                {props.message || `Are you sure you want to perform this action?`}
              </p>
            ) : (
              props.message
            )}
          </div>
        </Modal.Content>
        <Modal.Footer>
          <div className="flex justify-end space-x-4">
            <Button color="white" type="button" onClick={props.onCancel || (() => setShowModal(false))}>
              {props.cancelButtonLabel || 'No'}
            </Button>
            <Button
              disabled={props?.isConfirmButtonLoading ?? false}
              loading={props?.isConfirmButtonLoading ?? false}
              color={props.okButtonColor || 'primary'}
              type="button"
              onClick={props.onConfirm}
              label={props.okButtonLabel || 'Yes'}
            />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
