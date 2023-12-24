import axios from "axios";

export default () => {
  return {
    items: null,
    load() {
      axios.get("https://digitalinnovationone.github.io/api-digimon/api/digimon.json").then(
        (result) => {
          console.log(result);
          if (result.status === 200) {
            console.log(this.items);
            this.items = result.data;
            console.log(this.items);
          } else {
            this.items = [];
          }
        },
        (error) => {
          this.items = [];
          console.error(error);
        }
      );
    },
    init() {
      console.log("init ...");
      this.load();
    },
  };
};
