let sentenceBuilder = {

subject: "I",

verb: "am",

object: "coding",

buildSentence: function() {
    if (
      this.subject.trim() == "" ||
      this.verb.trim() == "" ||
      this.object.trim() == ""
    ) {
      console.log("Incomplete sentence");
    } else {
      console.log(this.subject + " " + this.verb+ " " + this.object);
    }
},
updateProperty: function(property, value) {
     let output= this[property]!==undefined?this[property] = value : console.log("Invalid property");
    
 },
}

sentenceBuilder.updateProperty("verb", "");

sentenceBuilder.buildSentence();