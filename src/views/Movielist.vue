<template>
  <div class="movielist md-layout md-gutter md-alignment-top-center">
    <div class="md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <h1 class="md-headline">Anders' film liste</h1>
        <h2 class="md-subheading">Pop-culture must-see's:</h2>
        <div class="md-layout">
            <md-list class="md-layout-item md-gutter list-container md-layout-item md-elevation-2">
                <md-list-item class="list-group-item"><a href="http://www.imdb.com/title/tt0110912/?ref_=nv_sr_1" target="_blank">Pulp Fiction <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
                <md-list-item class="list-group-item"><a href="http://www.imdb.com/title/tt0241527/?ref_=nv_sr_1" target="_blank">Harry Potter <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
                <md-list-item class="list-group-item"><a href="http://www.imdb.com/title/tt0120338/?ref_=nv_sr_1" target="_blank">Titanic <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
                <md-list-item class="list-group-item"><a href="http://www.imdb.com/title/tt0083866/?ref_=nv_sr_1" target="_blank">ET <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
                <md-list-item class="list-group-item"><a href="http://www.imdb.com/title/tt0080339/?ref_=nv_sr_1" target="_blank">Airplace! <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
                <md-list-item class="list-group-item"><a href="http://www.imdb.com/title/tt0377092/?ref_=nv_sr_1" target="_blank">Mean Girls <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
                <md-list-item class="list-group-item"><a href="http://www.imdb.com/title/tt0088763/?ref_=nv_sr_1" target="_blank">Back to the Future <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
                <md-list-item class="list-group-item"><a href="http://www.imdb.com/title/tt0078748/?ref_=nv_sr_2" target="_blank">Alien <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
                <md-list-item class="list-group-item"><a href="http://www.imdb.com/title/tt0107290/?ref_=ttls_li_tt" target="_blank">Jurasic Park <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
                <md-list-item class="list-group-item"><a href="http://www.imdb.com/title/tt0095016/?ref_=ttls_li_tt" target="_blank">Die Hard <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
                <md-list-item class="list-group-item"><a href="http://www.imdb.com/title/tt0167404/?ref_=ttls_li_tt" target="_blank">The Sixth Sense <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
                <md-list-item class="list-group-item"><a href="http://www.imdb.com/title/tt0120382/?ref_=tt_rec_tt" target="_blank">The Truman Show <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
            </md-list>
        </div>
        <h2 class="md-subheading">Pop-culture must-see's:</h2>
        <div class="md-layout">
            <md-list class="md-layout-item md-gutter list-container md-layout-item md-elevation-2">
                <md-list-item class="list-group-item"><a href="https://en.wikipedia.org/wiki/List_of_Marvel_Cinematic_Universe_films" target="_blank">Marvel Heroes <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
                <md-list-item class="list-group-item"><a href="http://www.imdb.com/title/tt0133093/?ref_=ttls_li_tt" target="_blank">Matrix <md-icon class="md-list-action">open_in_new</md-icon></a></md-list-item>
            </md-list>
        </div>
    </div>
  </div>
</template>

<style scoped>
.movielist {
    background: linear-gradient(#ffffff, #ffffff,#b2dfdb);
    height: 100vh;
}

a {
    color:black;
}

.list-container {
    display: inline-block;
    vertical-align: top;
    border: 1px solid #4db6ac;
}

.md-list-item:hover {
    background-color: #b2dfdb;
}
</style>