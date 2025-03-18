<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <br />
      <router-link to="/databinding">Data Binding</router-link> |
      <router-link to="/inputtext">Input Text</router-link> |
      <router-link to="/inputnumber">Number</router-link> |
      <router-link to="/textarea">Textarea</router-link> |
      <router-link to="/select">Select</router-link> |
      <br />
      <router-link to="/check">Check</router-link> |
      <router-link to="/check2">Check2</router-link> |
      <router-link to="/radio">Radio</router-link> |
      <router-link to="/att">Attribute</router-link> |
      <router-link to="/button">Button</router-link> |
      <router-link to="/class">Class</router-link> |
      <router-link to="/class2">Class2</router-link> |
      <br />
      <router-link to="/style">Style</router-link> |
      <router-link to="/style2">Style2</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/v-if">v-if</router-link> |
      <router-link to="/v-show">v-show</router-link> |
      <router-link to="/@click">@Click</router-link> |
      <router-link to="/@change">@Change</router-link> |
      <router-link to="/computed">computed</router-link> |
      <router-link to="/watch">watch</router-link> |
      <br />
      <router-link to="/Api">Api</router-link> |
      <router-link to="/compo">component</router-link> |
      <router-link to="/parent">parent</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
