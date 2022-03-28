import React from 'react'
import "../data.css"

class beranda extends React.Component {
    render() {
        return(
            <div class="tampilan">
        <div class="img">
          <img
            src="https://i.pinimg.com/564x/ee/02/61/ee02611ba2fae7dd6717516dc1107bc7.jpg"
            width="1403"
            height="800"
          ></img>
        </div>
        <div class="judul">
          <div class="container p-1 my-3 bg-dark text-white rounded col-12">
            <div class="row">
              <div class="col-12">
                <div class="p-2 border" align="center">
                <b>Halo Selamat Datang ! </b>Di Aplikasi Biodata Diri SMK
                  Telkom Malang
                </div>
              </div>
            </div>
          </div>
          <div class="container p-1 my-3 bg-light border text-black rounded col-9">
            <div class="col" align="center">
              <h4 class="h4">BIODATA SAYA</h4>
            </div>
          </div>
          <div class="container p-1 my-2 bg-light border text-black rounded col-9">
            <div class="col" align="center">
              <h5 class="my-3">Photo of me:</h5>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZ3QHqE1UyVRSd5PSgStxOUlq3gd4MLZCJUxMXQZmXUNNR4v9l0BsgvXlBaVES8nbdCg&usqp=CAU"
                width="170"
                height="170"
                class="d-inline-block align-top rounded-circle my-4"
                alt="SMK Telkom Malang Logo"
              ></img>
              <ul class="list-group list-group-bordered  my-4">
                <li class="list-group-item">
                  <b>Name : </b> Lelyta Meyda Ayu Budiyanti
                </li>
                <li class="list-group-item">
                  <b>Sekolah : </b> SMK Telkom Malang
                </li>
                <li class="list-group-item">
                  <b>Kelas : </b> XI RPL 1
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
export default beranda;