import React from 'react'
import { Table } from 'semantic-ui-react'

export function Rows() {
    return(
        <div>
        <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>
          John is an interesting boy but sometimes you don't really have enough
          room to describe everything you'd like
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>
          Jamie is a kind girl but sometimes you don't really have enough room
          to describe everything you'd like
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell>
          Jill is an alright girl but sometimes you don't really have enough
          room to describe everything you'd like
        </Table.Cell>
      </Table.Row>
      </div>
    )
}