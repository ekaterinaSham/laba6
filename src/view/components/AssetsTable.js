import React from "react";
import { Link } from "react-router-dom";

function AssetsTable({ items }) {
    if (items.length === 0) {
        return <div>У вас нет активов</div>;
    }

    return (
        <table class="table mt-3">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Название</th>
                    <th scope="col">Тип</th>
                    <th scope="col">ISIN</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {items.map((record) => (
                    <tr key={record.getInternalId()}>
                        <th scope="row">{record.getId()}</th>
                        <td>{record.getAssetName()}</td>
                        <td>{record.getAssetType()}</td>
                        <td>{record.getIsin()}</td>
                        <td>
                            <Link to={`/detail/${record.getInternalId()}`}>
                                Подробнее
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default AssetsTable;
