// Contact.js
import React from 'react'
import { Header } from './Header';
import { Navigation } from './Navigation';

const Contact = () => {
    return (
        <>
            <Header />
            <Navigation />
            <section class="container mt-0">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="text-center display-4 my-4">Contact</h2>
                        <p>
                            Please feel free to contact me for potential projects, supervision or collaborations.
                            My preferred contact initiation method is email.
                        </p>
                        <hr class="my-4" />
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td style={{ textAlign: 'left' }}>siphesihles@uj.ac.za</td>
                                </tr>
                                <tr>
                                    <th scope="row">Phone</th>
                                    <td style={{ textAlign: 'left' }}>+27 11 559 2847</td>
                                </tr>
                                <tr>
                                    <th scope="row">Address</th>
                                    <td style={{ textAlign: 'left' }}>Cnr Kingsway and University Road, Auckland Park, Johannesburg, 2092</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </>
    );
}

export { Contact };