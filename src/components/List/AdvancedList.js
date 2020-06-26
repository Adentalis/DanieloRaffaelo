import React, { Component } from "react";
import ObjectList from "react-object-list";
//import { FontAwesome } from "react-object-list/icons";

const mockData = [];
for(var i = 0 ; i < 5 ; i++){
    mockData.push({
        email: "hans22@ff",
        gender: "fff",
        first_name: "fd",
        last_name: " gg",
      });
}

export default class VocabularyPage extends Component {
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
          columns={[
            [
              { dataKey: "first_name", header: "First Name" },
              { dataKey: "last_name", header: "Last Name" },
            ],
            { dataKey: "email", header: "Email" },
            { dataKey: "gender", header: "Gender" },
          ]}
          data={mockData}
          favouritesEnabled={false}
        />
        ,
      </div>
    );
  }
}
