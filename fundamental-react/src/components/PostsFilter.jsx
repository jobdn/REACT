import React from "react";

import SearchPostsInput from "./UI/Input";
import { Select } from "./UI/select/Select";

import classes from "./PostsFilter.module.scss";

const PostsFilter = ({ filter, options, onChangeFilter }) => {
  return (
    <>
      <Select
        selectValue={filter.sort}
        options={options}
        defaultTitle="Sort by ..."
        onChange={(selectedSort) =>
          onChangeFilter({ ...filter, sort: selectedSort })
        }
      />

      <SearchPostsInput
        value={filter.query}
        onChange={(e) =>
          onChangeFilter((filter) => ({ filter, query: e.target.value }))
        }
        placeholder="Search..."
        className={classes.input}
      />
    </>
  );
};

export default PostsFilter;
