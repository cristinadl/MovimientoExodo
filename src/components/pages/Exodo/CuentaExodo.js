import React, { Component } from 'react'
import AccountContent from './../../AccountContent'

export default class CuentaExodo extends Component {
    render() {
        return (

            <div>
                <AccountContent></AccountContent>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <form method="post" action="#" id="#">
                                <div class="form-group files">
                                    <label>Upload Your File </label>
                                    <input type="file" class="form-control" accept = ".png, .jpeg" multiple=""></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
