<!-- run on any node via mongo shell after initial create -->

config = {
  	"_id" : "rsTelete",
  	"members" : [
  		{
  			"_id" : 0,
  			"host" : "localmongo1:27017"
  		},
  		{
  			"_id" : 1,
  			"host" : "localmongo2:27017"
  		},
  		{
  			"_id" : 2,
  			"host" : "localmongo3:27017"
  		}
  	]
  }
  
rs.initiate(config)
