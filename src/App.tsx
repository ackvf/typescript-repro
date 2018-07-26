import * as React from 'react'
import './App.css'

class App extends React.Component {
  public state: {
    num: number
    records: {}
  } = {
    num: 0,
    records: {},
  }

  public mergeIntoState = () => {
    const _records = {} // tslint:disable-line:variable-name

    ;['a', 'b', 'c'].forEach(el => {
      _records[el] = {}
    })


    // issue 1

    this.setState(({num}) => ({num: num + 1})) // var num: this['state']['num']
    this.setState(({num}) => ({num: num + ''})) // var num: any
    //            ({any})  => ({string: any + string})


    // issue 2

    this.setState(({records}) => ({records: {..._records, ...records}})) // Spread types may only be created from object types.
    this.setState(({records}) => ({records: {..._records, ...(records as this['state']['records'])}})) // Spread types may only be created from object types.
    //            ({any})     => ({any:     {...{},       ...(any     as  (property) records: {} )}})
    this.setState(({records}) => ({records: {..._records, ...(records as {})}})) // this is ok
    //            ({this["state"]["records"]})
  }

  public render() {
    return null
  }
}

export default App


// for simplicity, a significantly reduced signature
declare module 'React' {
  interface Component { // tslint:disable-line:interface-name
    setState<K extends keyof T, T = this['state']>(
        state: (
          (prevState: Readonly<T>) => (Pick<T, K> | T | null)
        )
    ): void
  }
}
