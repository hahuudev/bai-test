import clsx from "clsx";
import Table from "~/components/Table";
import styles from "./Profile.module.scss";
import Modal from "~/components/Modal";
import { useState } from "react";
import { useDeletePostMutation, useGetPostQuery } from "~/redux/post.service";
import ModalCreate from "./ModalForm";
import editImg from "~/assets/images/icons8-edit-24 4.png";
import xoaImg from "~/assets/images/icons8-delete-30 4.png";
import { toast } from "react-toastify";
import ModalForm from "./ModalForm";

const Profile = () => {
    const [isOpenModalAdd, setIsOpenModalAdd] = useState<boolean>(false);
    const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false);
    const { data, isFetching } = useGetPostQuery();
    const [deletePost] = useDeletePostMutation();

    const columns = [
        { title: "ID", dataIndex: "index", key: "index" },
        { title: "Title", dataIndex: "title", key: "title" },
        { title: "Description", dataIndex: "description", key: "description" },
        { title: "Tags", dataIndex: "tags", key: "tags" },
        {
            title: "Actions",
            dataIndex: "",
            key: "",
            render: (item: any) => {
                const handleRemove = (id: string) => {
                    const isRes = confirm("Bạn có muốn xóa không");
                    if (isRes) {
                        deletePost(id)
                            .unwrap()
                            .then(() => {
                                toast.success("Xóa thành công");
                            })
                            .catch((error) => {
                                toast.error(error.error);
                            });
                    }
                };

                return (
                    <div className="flex">
                        <button onClick={()=> setIsOpenModalEdit(true)}>
                            <img src={editImg} alt="" />
                        </button>
                        <button className="ml-4" onClick={() => handleRemove(item.id)}>
                            <img src={xoaImg} alt="" />
                        </button>
                        <Modal isOpen={isOpenModalEdit}>
                            <div className={styles.modal}>
                                <div>
                                    <ModalForm setIsOpenModal={setIsOpenModalEdit} mode="edit" postId={item.id} />
                                </div>
                            </div>
                        </Modal>
                    </div>
                );
            },
        },
    ];

    const dataSource = data?.posts?.map((post, index) => ({
        id: post.id,
        index: index + 1,
        title: post.title,
        description: post.description,
        tags: post.tags.join(", "),
    }));

    return (
        <div className={styles.profile}>
            <div className={clsx(styles.options, "flex justify-between")}>
                <button onClick={() => setIsOpenModalAdd(true)}>Add new</button>

                <div className="">
                    <input type="text" placeholder="TITLE" />
                    <input type="text" placeholder="TITLE" className="ml-6" />
                </div>
            </div>
            <div className={styles.table}>{!isFetching && <Table dataSource={dataSource as any} columns={columns as any} />}</div>

            <Modal isOpen={isOpenModalAdd}>
                <div className={styles.modal}>
                    <div>
                        <ModalCreate setIsOpenModal={setIsOpenModalAdd} mode="create" />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Profile;
