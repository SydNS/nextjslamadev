import React from 'react';
import styles from './table.module.css';
import Image from 'next/image';

const CustomTable = ({ data }) => {
    // Extract columns from the first item in the data array
    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex}>
                                {column === 'Name' ? (
                                    <div className={styles.user}>
                                        <Image
                                            src={row.image}
                                            alt="user image"
                                            width={40}
                                            height={40}
                                            className={styles.userImage}
                                        />
                                        {row[column.toLowerCase()]}
                                    </div>
                                ) : (
                                    row[column.toLowerCase()]
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;
