import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { useGetPostByIdQuery, useNewPostMutation, useUpdatePostMutation } from "~/redux/post.service";
import { IPost } from "~/@types";
import { toast } from "react-toastify";

type FormValues = { title: string; description: string; tags: string[] };

const ModalForm = ({ setIsOpenModal, mode = "create", postId }: { setIsOpenModal: any; mode: "create" | "edit"; postId?: string }) => {
    const [values, setValues] = useState<FormValues>({ title: "", description: "", tags: [] });
    const [newPost] = useNewPostMutation();
    const [editPost] = useUpdatePostMutation();

    const { data } = useGetPostByIdQuery(postId as string, { skip: !postId });

    useEffect(() => {
        if (mode === "edit" && data) {
            setValues(data);
        }
    }, [mode, data]);

    const handleSubmit = () => {
        if (mode === "create") {
            newPost(values as IPost)
                .unwrap()
                .then(() => {
                    toast.success("Thêm thành công");
                    setValues({ title: "", description: "", tags: [] });
                    setIsOpenModal(false);
                })
                .catch((error) => {
                    toast.error(error.error);
                });
        }

        if (mode === "edit") {
            editPost({ ...values, id: postId } as IPost).unwrap()
            .then(() => {
                toast.success("Sửa thành công");
                setValues({ title: "", description: "", tags: [] });
                setIsOpenModal(false);
            })
            .catch((error) => {
                toast.error(error.error);
            });
        }
    };
    return (
        <div className={styles["modal-form"]}>
            <h3>Modal {mode == "create" ? "Create" : "Edit"} Post</h3>

            <form className={styles.form}>
                <div className={styles["form-item"]}>
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Title" value={values.title} onChange={(e) => setValues({ ...values, title: e.target.value })} />
                </div>

                <div className={styles["form-item"]}>
                    <label htmlFor="">Description</label>
                    <textarea
                        placeholder="Title"
                        value={values.description}
                        onChange={(e) => setValues({ ...values, description: e.target.value })}
                        cols={4}
                    ></textarea>
                </div>

                <div className={styles["form-item"]}>
                    <label htmlFor="">Tags</label>
                    <select multiple value={values.tags} onChange={(e) => setValues({ ...values, tags: [...values.tags, e.target.value] })}>
                        <option value="Html">Html</option>
                        <option value="css">css</option>
                        <option value="Javascript">Javascript</option>
                        <option value="NodeJs">NodeJs</option>
                        <option value="ReactJs">ReactJs</option>
                    </select>
                </div>
            </form>

            <div className={styles["form-btn"]}>
                <button onClick={() => setIsOpenModal(false)}>Close</button>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default ModalForm;
