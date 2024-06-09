import DataTable from '../../src/components/DataTable.vue'

describe('test data table', () => {
  it('mounts', () => {
    cy.mount(DataTable)
  })
})