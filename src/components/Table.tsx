import React, { useEffect, useMemo, useState } from 'react';

import MaterialReactTable, { MRT_ColumnDef as MrtColumn } from 'material-react-table';

import { useFeatureFlags } from 'hooks/useFeatureFlags';

type ApiData = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};

export const Table: React.FC = () => {
  const [data, setData] = useState<ApiData[]>([]);
  const { tableColumnFilters, tableColumnSort } = useFeatureFlags();

  const columns = useMemo<MrtColumn<ApiData>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Id',
      },
      {
        accessorKey: 'albumId',
        header: 'Album Id',
      },
      {
        accessorKey: 'title',
        header: 'Title',
      },
      {
        accessorKey: 'url',
        header: 'Song url',
      },
    ],
    []
  );

  useEffect(() => {
    try {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {}
  }, []);

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableTopToolbar={false}
        enableColumnFilters={tableColumnFilters}
        //   enableColumnFilters={flags.tableColumnFilters}
        enablePagination
        muiTablePaginationProps={{
          rowsPerPageOptions: [5, 10],
          showFirstButton: false,
          showLastButton: false,
        }}
        enableSorting={tableColumnSort}
        //   enableSorting={flags.tableColumnSort}
      />
    </>
  );
};
