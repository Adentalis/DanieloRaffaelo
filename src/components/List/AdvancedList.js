import React, { Component } from "react";
import ObjectList from "react-object-list";
//import { FontAwesome } from "react-object-list/icons";
//import { TextContainsFilter } from "react-object-list/filters";

const mockData = [];
for (var i = 0; i < 5; i++) {
  mockData.push({
    email: "hans22@ff",
    gender: "fff",
    first_name: "fd",
    last_name: " gg",
  });
}

const columns = [
    [
      {dataKey: 'first_name', header: 'First Name', sortKey: 'first_name'},
      {dataKey: 'last_name', header: 'Last Name', sortKey: 'last_name', optional: true},
    ],
    {dataKey: 'email', header: 'Email', sortKey: 'email'},
    {dataKey: 'gender', header: 'Gender', sortKey: 'gender'},
    {dataKey: 'ip_address', header: 'IPv6', sortKey: 'ip_address', optional: true},
  ]

export default class VocabularyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      perPage: 7,
      totalCount: mockData.length,
      sortKeys: [],
      data: mockData.slice(0, 7),
      extraColumns: ["last_name"],
      filters: [
        {
          filterKey: "first_name",
          active: false,
          name: "First Name",
          props: {
            updateDelay: 0,
          },
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <ObjectList
          icons={{
            OptionalFields: <i className="list" />,
            Favourites: <i className="heart" />,
            RemoveFavourite: <i className="trash" />,
            RemoveFilter: <i className="minus-circle" />,
            DropdownOpen: <i className="caret-down" />,
            DropdownClose: <i className="caret-up" />,
            SortAsc: <i className="caret-up" />,
            SortDesc: <i className="caret-down" />,
            Unsorted: <i className="sort" />,
            Loading: <i className="circle-notch spin" />,
            CheckboxChecked: <i className="check-square" />,
            CheckboxUnchecked: <i className="square" />,
          }}
          columns={columns}
          data={mockData}
          favouritesEnabled={false}
        />
        ,
      </div>
    );
  }
}
