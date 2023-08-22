import styles from "./Table.module.scss";
type Props = {
    columns: { key: string; title: string; render?: () => React.ReactNode }[];
    dataSource: any[];
};

const Table = ({ dataSource, columns }: Props) => {
    const renderHeader = columns.map((column) => {
        return <th key={column.key}>{column.title}</th>;
    });
    const renderRows = dataSource.map((item) => {
        const renderCells = columns.map((column: any) => {
            if (column.render) {
                return <td key={column.key}>{column.render(item)}</td>;
            }
            return <td key={column.key}>{item[column.dataIndex]}</td>;
        });
        return <tr key={item.id}>{renderCells}</tr>;
    });

    return (
        <table className={styles.table}>
            <thead>
                <tr>{renderHeader}</tr>
            </thead>
            <tbody>{renderRows}</tbody>
        </table>
    );
};

export default Table;
