import Head from 'next/head'
import React, { Component } from 'react'
import styles from "../styles/home.module.css"
export default function index() {
  return (
    <div className="container">
      <Head>
        <title>Hello my web</title>
        <div>
          <div class="block-title">
            <h1 id="title1">ปลื้ม</h1>
            <h1 id="title2">Phuket</h1>
          </div>
        </div>
        <p class="nameTitle">Bar & Restaurant</p>
      </Head>


      <section>
        <div className="photo">
          <img class="img-circle"
            src="https://scontent.fbkk4-3.fna.fbcdn.net/v/t31.0-8/28336058_2001303203452107_9222223734920963819_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeFUk0zgFfsLJH_RgccIdfLrhUIi-nPI3kOFQiL6c8jeQ8iVCgtdV02UdCgF3jJUZ2frMx0HmJ7XfMP-RBsOnsXa&_nc_oc=AQkTrFZgWyZ6sMkHEkganrwkPRfKj8gehVRExD_JUD2rluWwMSpLtQufglNG0Nh4Ac0&_nc_ht=scontent.fbkk4-3.fna&oh=13c351e7c913b4cd8a2635c389342364&oe=5F1A8051"
            alt="Girl in a jacket" width="430" height="450" />
        </div>
      </section>

      <aside>
        <div>
          <div className="detail">
            ร้านอาหารและเครื่องดื่ม พร้อมดนตรีสด <BR />
              เวลาเปิด : 17:00 - 00:00 น. <BR />
                (ปิดทุกวันสำคัญทางศาสนา และวันหยุดนักขัตฤกษ์)
            </div>
        </div>
        <div>
          <div className="login">
            <form action="/action_page.php">
              <h3>Member Login</h3>
              <label for="id">ID:</label><BR />
              <input type="text" id="id" name="id" placeholder="Your ID" /><BR />
              <label for="lname">Password:</label><BR />
              <input type="text" id="pass" name="pass" placeholder="Your password" /><BR /><BR />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>

        <div className="facebook ">
          <ul>
            <li><a href="https://web.facebook.com/PluemPhuket/?ref=page_internal" target="_blank"><i
              class="fa fa-facebook"></i></a>
            </li>
          </ul>
        </div>
      </aside>


      <footer>
        <marquee>
          <font size="4" color="red">ช่วงนี้ร้านมีโปรโมชั่นพิเศษ ลด 20% ทั้งอาหารและเครื่องดื่ม!!! </font>
        </marquee>
        <div class="menu-page">
          <input type="button"
            onclick="window.location.href='https://web.facebook.com/PluemPhuket/?ref=page_internal'" value="Page 1" />
          <input type="button"
            onclick="window.location.href='https://web.facebook.com/PluemPhuket/?ref=page_internal'" value="Page 2" />
          <input type="button"
            onclick="window.location.href='https://web.facebook.com/PluemPhuket/?ref=page_internal'" value="Page 3" />
        </div>
      </footer>
    </div>