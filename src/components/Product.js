import React, { useState } from 'react';
import Button from './Button';
import { Icon } from 'antd';
import UpdateFormModal from './UpdateFormModal';
import DeleteFormModal from './DeleteFormModal';
import ProductDetail from './ProductDetail';

const Promotion = props => {
    const { data, type, editable } = props;
    const { available } = data;

    const [modal, setModal] = useState('');

    const handleToggle = () => {
        props.onChange && props.onChange({ ...data, available: !data.available });
    }

    return (
        <div className='container'>
            <ProductDetail data={data} type={type}/>
            {
                editable && (
                    <div className='action'>
                        <Button color={available ? 'green' : 'red'} icon={available ? 'check' : 'close'} onClick={handleToggle}>
                            {available ? 'Available' : 'Not available'}
                        </Button>
                        <div className='del-update'>
                            <span className='edit-icon'>
                                <Icon type='edit' onClick={() => setModal('update')} />
                            </span>
                            <span className='delete-icon'>
                                <Icon type='delete' onClick={() => setModal('delete')} />
                            </span>
                        </div>
                        <UpdateFormModal type={type} data={data} onCancel={() => setModal('')} visible={modal === 'update'}/>
                        <DeleteFormModal type={type} data={data} onCancel={() => setModal('')} visible={modal === 'delete'}/>
                    </div>
                )
            }
            <style jsx>{`
                .container {
                    width: 100%;
                    margin-bottom: 8px;
                    border-bottom: 1px solid var(--gray-light);
                }
                
                .action {
                    display: flex;
                    margin-bottom: 8px;
                    justify-content: space-between;
                }
                .edit-icon {
                    margin-right: 12px;
                    color: var(--blue);
                }
                .delete-icon {
                    color: var(--red);
                }
            `}</style>
        </div>
    )
}

export default Promotion;