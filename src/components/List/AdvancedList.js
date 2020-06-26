import React, { Component } from "react";
import ObjectList from "react-object-list";
import { FontAwesome } from "react-object-list/icons";
//import { TextContainsFilter } from "react-object-list/filters";
import ReactDom from 'react-dom'


const mockData = [];
for (var i = 0; i < 51; i++) {
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

export default class AdvancedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      perPage: 7,
      totalCount: mockData.length,
      sortKeys: [],
      data: mockData.slice(0, 27),
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      this.updateData(1)
    }
  }

  updatePage = currentPage => this.updateData(currentPage)
  updateSorting = sortKey => this.setState(prevState => {
    let sortKeys = [...prevState.sortKeys]
    const currentSort = sortKeys.find(sort => sort.sortKey === sortKey)
    let value = true
    if (currentSort !== undefined && currentSort.value === true) {
      value = false
    }
    sortKeys = [{sortKey: sortKey, value}].concat(sortKeys.filter((k) => k.sortKey !== sortKey))

    const offset = (prevState.currentPage - 1) * prevState.perPage
    return {
      sortKeys,
      data: mockData.sort((a, b) => {
        for (let i = 0; i < sortKeys.length; i++) {
          const order = sortKeys[i].value ? 1 : -1
          if (a[sortKeys[i].sortKey] > b[sortKeys[i].sortKey]) return -1 * order
          if (a[sortKeys[i].sortKey] < b[sortKeys[i].sortKey]) return 1 * order
        }
        return 0
      }).slice(offset, offset + prevState.perPage),
    }
  })
  updateColumns = columnKey => this.setState(prevState => {
    let extraColumns = [...prevState.extraColumns]
    if (extraColumns.includes(columnKey)) {
      extraColumns = extraColumns.filter(key => key !== columnKey)
    } else {
      extraColumns.push(columnKey)
    }
    return {extraColumns}
})
addFilter = newFilter => this.setState(prevState => {
  const filters = prevState.filters.map(filter => {
    if (filter.filterKey === newFilter.filterKey) {
      return {...filter, active: true}
    } else {
      return {...filter}
    }
  })
  return {filters}
})
removeFilter = filterKey => this.setState(prevState => {
  const filters = prevState.filters.map(filter => {
    if (filter.filterKey === filterKey) {
      return {...filter, active: false, value: ''}
    } else {
      return {...filter}
    }
  })
  return {filters}
})
updateFilter = ({filter: filterKey, comparison, value}) => this.setState(prevState => {
  const filters = prevState.filters.map(filter => {
    if (filter.filterKey === filterKey) {
      return {...filter, value, comparison}
    } else {
      return {...filter}
    }
  })
  return {filters}
})
updateData = (currentPage) => {
  let data = mockData
  const activeFilters = this.state.filters.filter(filter => filter.active)
  if (activeFilters.length > 0) { // filter data
    data = data.filter(row => {
      for (let i = 0; i < activeFilters.length; i++) {
        const regex = RegExp(activeFilters[i].value, 'i')
        const result = regex.test(row[activeFilters[i].filterKey])
        return result === (activeFilters[i].comparison === 'contains')
      }
      return false
    })
  }
  // paginate data
  const offset = (currentPage - 1) * this.state.perPage
  this.setState(prevState => ({
    totalCount: data.length,
    data: data.slice(offset, offset + prevState.perPage),
    currentPage,
  }))
}

  render() {
    const { currentPage, perPage, totalCount, sortKeys, extraColumns, data } = this.state

    return (
      <div>
        <ObjectList
          icons={FontAwesome(4)}
          columns={columns}
          data={data}
          favouritesEnabled={false}
          maxPages={3}
          meta={{
            currentPage,
            perPage,
            totalCount,
            sortKeys,
            extraColumns,
          }}
          updatePage={this.updatePage}
          updateColumns={this.updateColumns}
          addFilter={this.addFilter}
          removeFilter={this.removeFilter}
        />
        ,
      </div>
    );
  }
}
