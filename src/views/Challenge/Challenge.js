import React from "react";
import { Link } from "react-router-dom";

function Challenge(props) {
    const {challenges} = props;
    return (
        <main>

        <section id="started-challenge">

            <div id="challenge-description">
                <div><a href="/challenges/<%= challenge._id %>/comments">Forum</a></div>
                <% if (solution){  %>
                    <div><a href="/users/<%= userId %>/challenges/<%= savedChallengeId %>/whiteboard">Whiteboard</a></div>
                    <% } %>
                <p><%- challenge.description %></p>
            </div>

            <div id="work-area">
                <!-- save challenge to user profile -->
                <% if (solution){  %>
                    <form id="saveChallenge" action="/users/<%= userId %>/challenges/<%= challenge._id %>?_method=PUT" method="POST">

               <%  }else{  %>
                <form id="saveChallenge" action="/users/<%= userId %>/challenges" method="POST">
                <% } %>
                    <textarea name="solution" id="userSolution" cols="70" rows="40">
                    <%= solution? solution : challenge.starter_code %>
                </textarea>
                    <input id="inputUser_id" type="hidden" name="user_id" value="<%= userId %>">
                    <input id="inputChallenge_id" type="hidden" name="challenge_id" value= <%= challenge._id %> >
                    <input type="submit" value="save">

                </form>
                <button onclick="checkResult()">check</button>
            </div>

        </section>


        <section id="results">
            <div id="result-failed-cases"></div>
            <div id="result-passed-cases"></div>
        </section>



    </main>
  }
  export default Challenge;
