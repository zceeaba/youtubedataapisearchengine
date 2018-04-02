{%extends 'layout.swig' %}
{%set title='youtube search engine' %}
{%block body%}
  <h1> Search for youtube videos</h1>
  <p> Welcome to the search engine</p>
  <form method="POST" id="search_form">
      <label>Search:</label>
      <input type="text" name="search" id="username"/>
      <input type="submit" value="Submit" name="submit" class="submit" id="submit" />
  </form>
  <script>
  $(function() {
      $('#search_form').on('submit', function(e) { //use on if jQuery 1.7+
          e.preventDefault();  //prevent form from submitting
          var data = $(this).serializeArray();
          console.log(data[0]["value"]); //use the console for debugging, F12 in Chrome, not alerts
          <!--          $.post( "youtubesearch",{search :data[0]["value"]}); -->
          window.location.href = '/youtubesearch?search='+data[0]["value"];
      });
  });
  </script

{%endblock%}
