<template>
  <!-- 选择签名组件 -->
  <el-dialog
    :visible.sync="visible"
    @close="close"
    :show="dialogVisible"
    :fullscreen="true"
    :closeOnClickModal="false"
    :show-close="false"
  >
    <div slot="title" class="top">
      <div class="left">
        选择签名、盖章位置
        <div class="pagination">
          <el-pagination
            layout="prev, pager, next"
            :page-count="pageJson.pageCount"
            :current-page.sync="pageJson.currentPage"
            @current-change="currentchange"
          >
          </el-pagination>
        </div>
      </div>
      <div class="right">
        <el-button class="btn submit" @click="submit" :loading="submitLoading"
          >提交</el-button
        >
        <el-button class="btn cancel" @click="visible = false">取消</el-button>
      </div>
    </div>
    <div class="container">
      <div class="sidebar sealDrag_sidebar">
        <p class="tip">请将下列框（签名、盖章）拖入右侧合同适当位置。</p>
        <div class="column" v-if="authority.ownerSign && authority.ownerSeal">
          <div class="title">甲方</div>
          <div class="row">
            <div class="dt">签名专用</div>
            <div
              class="dd ownerSign"
              did="ownerSign"
              :draggable="authority.ownerSign && authority.ownerSeal"
              @dragstart="sealDragstart"
              title="拖拽到右边合同任意位置"
            >
              甲方签名位置
            </div>
          </div>
          <div class="row">
            <div class="dt">
              盖章专用
            </div>
            <div
              class="dd big ownerSeal"
              did="ownerSeal"
              :draggable="authority.ownerSeal && authority.ownerSign"
              @dragstart="sealDragstart"
              title="拖拽到右边合同任意位置"
            >
              甲方盖章位置
            </div>
          </div>
        </div>
        <div class="column" v-if="authority.customSign && authority.customSeal">
          <div class="title">乙方</div>
          <div class="row">
            <div class="dt">签名专用</div>
            <div
              class="dd customSign"
              did="customSign"
              :draggable="authority.customSign && authority.customSeal"
              @dragstart="sealDragstart"
              title="拖拽到右边合同任意位置"
            >
              乙方签名位置
            </div>
          </div>
          <div class="row">
            <div class="dt">盖章专用</div>
            <div
              class="dd big customSeal"
              did="customSeal"
              :draggable="authority.customSeal && authority.customSign"
              @dragstart="sealDragstart"
              title="拖拽到右边合同任意位置"
            >
              乙方盖章位置
            </div>
          </div>
        </div>
        <div class="column" v-if="authority.agentSign && authority.agentSeal">
          <div class="title">丙方</div>
          <div class="row">
            <div class="dt">签名专用</div>
            <div
              class="dd agentSign"
              did="agentSign"
              :draggable="authority.agentSign && authority.agentSeal"
              @dragstart="sealDragstart"
              title="拖拽到右边合同任意位置"
            >
              丙方签名位置
            </div>
          </div>
          <div class="row">
            <div class="dt">盖章专用</div>
            <div
              class="dd big agentSeal"
              did="agentSeal"
              :draggable="authority.agentSeal && authority.agentSign"
              @dragstart="sealDragstart"
              title="拖拽到右边合同任意位置"
            >
              丙方盖章位置
            </div>
          </div>
        </div>
      </div>
      <div class="main" @scroll="scrollListen">
        <div
          class="contract"
          @drop.stop="sealDrop($event)"
          @dragover="allowDrop"
        >
          <div class="rent_contract">
            <!-- <pdf
              :src="src"
              :page="pageJson.currentPage"
              @num-pages="pageJson.pageCount = $event"
              @page-loaded="pageJson.currentPage = $event"
              @loaded="loadPdfHandler"
            >
            </pdf> -->
          </div>
          <div id="sealDrag_content">
            <div
              v-show="
                !authority.ownerSign &&
                  pageNum.ownerSign == pageJson.currentPage
              "
              class="dd ownerSign"
              did="ownerSign"
              :draggable="true"
              @dragstart="sealDragstart"
            >
              甲方签名位置
              <i class="el-icon-error" @click="removeSeal('ownerSign')"></i>
            </div>
            <div
              v-show="
                !authority.ownerSeal &&
                  pageNum.ownerSeal == pageJson.currentPage
              "
              class="dd big ownerSeal"
              did="ownerSeal"
              :draggable="true"
              @dragstart="sealDragstart"
            >
              甲方盖章位置
              <i class="el-icon-error" @click="removeSeal('ownerSeal')"></i>
            </div>
            <div
              v-show="
                !authority.customSign &&
                  pageNum.customSign == pageJson.currentPage
              "
              class="dd customSign"
              did="customSign"
              :draggable="true"
              @dragstart="sealDragstart"
            >
              乙方签名位置
              <i class="el-icon-error" @click="removeSeal('customSign')"></i>
            </div>
            <div
              v-show="
                !authority.customSeal &&
                  pageNum.customSeal == pageJson.currentPage
              "
              class="dd big customSeal"
              did="customSeal"
              :draggable="true"
              @dragstart="sealDragstart"
            >
              乙方盖章位置
              <i class="el-icon-error" @click="removeSeal('customSeal')"></i>
            </div>
            <div
              v-show="
                !authority.agentSign &&
                  pageNum.agentSign == pageJson.currentPage
              "
              class="dd agentSign"
              did="agentSign"
              :draggable="true"
              @dragstart="sealDragstart"
            >
              丙方签名位置
              <i class="el-icon-error" @click="removeSeal('agentSign')"></i>
            </div>
            <div
              v-show="
                !authority.agentSeal &&
                  pageNum.agentSeal == pageJson.currentPage
              "
              class="dd big agentSeal"
              did="agentSeal"
              :draggable="true"
              @dragstart="sealDragstart"
            >
              丙方盖章位置
              <i class="el-icon-error" @click="removeSeal('agentSeal')"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
// import pdf from "vue-pdf";
export default {
//   components: { pdf },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    id: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      visible: this.dialogVisible,
      submitLoading: false,
      authority: {
        ownerSign: true,
        ownerSeal: true,
        customSign: true,
        customSeal: true,
        agentSign: true,
        agentSeal: true
      },
      pageNum: {
        ownerSign: 0,
        ownerSeal: 0,
        customSign: 0,
        customSeal: 0,
        agentSign: 0,
        agentSeal: 0
      },
      signerSideMap: new Map([
        ["ownerSign", 1],
        ["ownerSeal", 1],
        ["customSign", 2],
        ["customSeal", 2],
        ["agentSign", 3],
        ["agentSeal", 3]
      ]),
      pageJson: {
        currentPage: 1,
        pageCount: 1
      },
      src: "" // pdf文件地址
    };
  },
  watch: {
    dialogVisible() {
      this.visible = this.dialogVisible;
    },
    id: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.getContract();
        }
      }
    }
  },
  methods: {
    scrollListen(e) {
      let _top = e.target.scrollTop;
      let outH = e.target.scrollHeight;
      let viewH = e.target.clientHeight;
      if (
        outH == _top + viewH &&
        this.pageJson.currentPage < this.pageJson.pageCount
      ) {
        this.pageJson.currentPage++;
      }
    },
    getContract() {
      this.$api
        .post({
          url: "/contractRent/generatePDFIO",
          data: { id: this.id },
          //responseType: "blob",
          qs: true
        })
        .then(e => {
          if (e.data.code == 200) {
            this.src = this.getObjectURL(e.data.data);
          }
        })
        .catch(e => {})
        .finally(e => {
          this.pageLoading = false;
        });
    },
    getObjectURL(file) {
      let padUrl = "data:application/pdf;base64," + file;
      return padUrl;
    },
    currentchange(page) {
      this.pageJson.currentPage = page;
    },
    loadPdfHandler(e) {
      this.pageJson.currentPage = 1;
    },
    close() {
      this.$emit("update:dialogVisible", false);
    },
    sealDragstart(e) {
      e.dataTransfer.setData("id", e.target.getAttribute("did"));
      e.dataTransfer.setData("offsetX", e.offsetX);
      e.dataTransfer.setData("offsetY", e.offsetY);
    },
    sealDrop(e) {
      e.preventDefault();
      let id = e.dataTransfer.getData("id");
      this.authority[id] = false;
      this.pageNum[id] = this.pageJson.currentPage;
      let offsetX = e.dataTransfer.getData("offsetX");
      let offsetY = e.dataTransfer.getData("offsetY");
      if (e.target.id == "sealDrag_content") {
        let dragDom = document.querySelector("#sealDrag_content" + " ." + id);
        dragDom.style.top = e.offsetY - offsetY - 3 + "px";
        dragDom.style.left = e.offsetX - offsetX - 3 + "px";
      } else {
        let _top = parseInt(e.target.style.top);
        let _left = parseInt(e.target.style.left);
        let dragDom = document.querySelector("#sealDrag_content" + " ." + id);
        dragDom.style.top = _top + (e.offsetY - offsetY) - 3 + "px";
        dragDom.style.left = _left + (e.offsetX - offsetX) - 3 + "px";
      }
    },
    allowDrop(e) {
      e.preventDefault();
    },
    removeSeal(type) {
      this.authority[type] = true;
    },
    submit() {
      let list = [];
      let h = document.querySelector("#sealDrag_content").clientHeight;
      let w = document.querySelector("#sealDrag_content").clientWidth;
      for (let key in this.authority) {
        if (!this.authority[key]) {
          let dom = document.querySelector("#sealDrag_content" + " ." + key);
          let obj = {
            x: (parseInt(dom.style.left) / w).toFixed(4),
            y: (parseInt(dom.style.top) / h).toFixed(4),
            signerSide: this.signerSideMap.get(key),
            pageNum: this.pageNum[key]
          };
          list.push(obj);
        }
      }
      this.submitLoading = true;
      this.$emit(
        "confirm",
        list,
        () => {
          this.$emit("update:dialogVisible", false);
        },
        () => {
          this.submitLoading = false;
        }
      );
    }
  }
};
</script>

<style lang="less" scoped>
/deep/.el-dialog.is-fullscreen {
  display: flex;
  flex-direction: column;
}
/deep/.el-dialog__header {
  padding: 0;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 0 24px;
    .left {
      display: flex;
      font-size: 18px;
      font-weight: bold;
      color: #303133;
      line-height: 1;
      .pagination {
        display: flex;
        align-items: center;
        margin-left: 65px;
      }
    }
    .right {
      .btn {
        width: 109px;
        height: 40px;
        border-radius: 4px;
        border: none;
        &.submit {
          background: #fff;
          color: #fff;
        }
        &.cancel {
          background: #f4f4f5;
          color: #606266;
        }
        span {
          font-size: 16px;
          line-height: 1;
        }
        & + .el-button {
          margin-left: 16px;
        }
      }
    }
  }
}
/deep/.el-dialog__body {
  flex: 1;
  padding: 0;
  display: flex;
  overflow: hidden;
  .container {
    display: flex;
    width: 100%;
    .sidebar {
      flex-shrink: 0;
      width: 248px;
      padding: 24px;
      background: #ffffff;
      box-shadow: 0px 2px 11px 0px rgba(198, 198, 198, 0.39);
      box-sizing: border-box;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: rgba(0, 0, 0, 0);
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background-color: #c9c9c9;
      }
      &::-webkit-scrollbar-track {
        background: #fff;
      }
      .tip {
        margin-bottom: 24px;
        font-size: 14px;
        color: #ef5656;
        line-height: 19px;
      }
      .column {
        & + .column {
          margin-top: 33px;
        }
        .title {
          margin-bottom: 16px;
          font-size: 18px;
          font-weight: bold;
          color: #303133;
          line-height: 1;
        }
        .row {
          & + .row {
            margin-top: 24px;
          }
          .dt {
            margin-bottom: 16px;
            font-size: 14px;
            color: #303133;
            line-height: 1;
          }
          .dd {
            width: 200px;
            height: 54px;
            background: #f3f3f3;
            border-radius: 4px;
            border: 2px dashed #979797;
            box-sizing: border-box;
            text-align: center;
            line-height: 50px;
            color: #909399;
            cursor: pointer;
            user-select: none;
            &.big {
              height: 200px;
              line-height: 196px;
            }
          }
        }
      }
    }
    .main {
      flex: 1;
      display: flex;
      justify-content: center;
      padding: 24px 0;
      background: #f0f7f7;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: rgba(0, 0, 0, 0);
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background-color: #c9c9c9;
      }
      &::-webkit-scrollbar-track {
        background: #fff;
      }
      .contract {
        position: relative;
        width: calc(210mm + 2px);
        height: calc(297mm + 2px);
        // width: 595px;
        // height: 1272px;
        border: 1px dashed #303133;
        background: #fff;
        overflow: hidden;
        .rent_contract {
          // padding: 20px 20px 0;
          font-family: "宋体";
          line-height: 1.4;
          margin: 0;
          font-size: 14px;
          color: #000;
        }
        #sealDrag_content {
          position: absolute;
          top: 0;
          left: 0;
          //bottom: 0;
          right: 0;
          height: 100%;
          z-index: 9;
          .dd {
            position: absolute;
            width: 200px;
            height: 54px;
            background: #f3f3f3;
            border-radius: 4px;
            border: 2px dashed #979797;
            box-sizing: border-box;
            text-align: center;
            line-height: 50px;
            color: #909399;
            cursor: pointer;
            user-select: none;
            &.big {
              height: 200px;
              line-height: 196px;
            }
            i {
              position: absolute;
              top: 5px;
              right: 5px;
              font-size: 18px;
              color: #ef5656;
            }
          }
        }
      }
    }
  }
}
</style>
