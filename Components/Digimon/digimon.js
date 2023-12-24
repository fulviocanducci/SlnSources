import axios from "axios";

export default () => {
  return {
    items: null,
    filter: "",
    get filterItems() {
      return this.items !== null && this.filter.length > 0 ? this.items.filter((x) => x.name.toLowerCase().includes(this.filter.toLowerCase())) : this.items;
    },
    load() {
      axios.get("https://digitalinnovationone.github.io/api-digimon/api/digimon.json").then(
        (result) => {
          if (result.status === 200) {
            this.items = result.data;
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
