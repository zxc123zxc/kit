import * as React from 'react';
import './space_grid.scss';
import { Grid, GridColumnConfig } from 'components/grid/Grid';
import { GridColumnEndProperty } from 'csstype';
import { TreeGrid } from 'components/tree_grid/TreeGrid';


export class SpaceGrid extends React.Component {
    constructor(props: any) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    render(): JSX.Element {
        return <div className='space-grid'>
            <TreeGrid></TreeGrid>

            <button onClick={this._handleClick}>Click me</button>
        </div>
    }


    private _handleClick(): void {
        // const obj = {
        //     a: 'test', b: 2, c: 3
        // };
        // const newList = [obj, ...this.state.rows];

        // this.setState({rows: newList});
    }
}