<template>
  <header>
    <img alt="Earth_logo" src="../assets/earth_logo.svg" height="80">
    <p>Hello! This is my website...</p>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">

	header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 1rem;

    p {
      font-family: Avenir, Helvetica, Arial, sans-serif;	
      margin-left: 1rem;
      font-size: x-large;
      font-weight:900;
      color:#C0C0C0;
    }
  }

  nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1rem;
      position: center;
    }
  }

</style>