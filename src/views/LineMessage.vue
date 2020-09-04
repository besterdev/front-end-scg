<template>
  <b-container class="contaniner-line">
    <h3>
      Status : <span id="span-staus">{{ status }}</span>
    </h3>
    <b-card bg-variant="light" header="Scan qr code" class="text-center">
      <b-card-text>
        <img id="img-qrcode" src="../assets/qrcode.png" alt
      /></b-card-text>
    </b-card>
    <br />
    <LineTable v-bind:items="items" />
  </b-container>
</template>

<script>
import io from "socket.io-client";
import LineTable from "@/components/LineTable";

export default {
  name: "LineMessage",
  components: {
    LineTable,
  },
  data() {
    return {
      socket: io("https://do-scg-app.herokuapp.com/"),
      status: "",
      alert: "",
      items: [],
      newMesage: "",
      lastId: "",
      id: "",
    };
  },
  methods: {
    startapp: function() {
      this.socket.on("status", (data) => {
        this.status = data;
      });
      this.socket.on("message", (message) => {
        console.log(message);
        this.lastId =
          this.items.length > 0 ? this.items[this.items.length - 1].id : 0;
        this.id = this.lastId + 1;
        this.newMesage = { id: this.id, message: message };
        this.items.push(this.newMesage);
        this.makeToast();
      });
    },
    makeToast(append = false) {
      this.$bvToast.toast(
        `Line bot can not answer customer ${this.newMesage.message}`,
        {
          title: "Alert",
          variant: "danger",
          autoHideDelay: 5000,
          appendToast: append,
        }
      );
      (this.lastId = ""), (this.id = ""), (this.newMesage = "");
    },
  },
  mounted: function() {
    this.startapp();
  },
};
</script>

<style scoped>
.contaniner-line {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

#img-qrcode {
  width: 250px;
  height: 250px;
}

#span-staus {
  color: #0cd32e;
}
</style>
