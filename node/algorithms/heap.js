class MinHeap {
  constructor() {
      this.nodes = [[0, -Infinity]]; //node구조 => [같이 저장하는 정보, 비교 대상이 되는 값]
  }
  
  push(leaf) {
      this.nodes.push(leaf);
      
      let cIdx = this.nodes.length - 1;
      let child = leaf;
      let [parent, pIdx] = this.getParent(cIdx);
      
      while(parent[1] > child[1]) {
          this.interchangeLeaf(cIdx, pIdx);
          cIdx = pIdx;
          [parent, pIdx] = this.getParent(cIdx);
      }
  }
  
  pop() {
      if (this.nodes.length === 1) {
          return null;
      } else if (this.nodes.length === 2) {
          return this.nodes.pop();
      } else {
          const root = this.nodes[1];
          this.nodes.splice(1, 1, this.nodes.pop());
          let pIdx = 1;
          let parent = this.nodes[pIdx];
          let [child, cIdx] = this.getChild(pIdx);
          
          while(cIdx && parent[1] > child[1]) {
              this.interchangeLeaf(cIdx, pIdx);
              pIdx = cIdx;
              [child, cIdx] = this.getChild(pIdx)
          }
          return root;
      }
  }
  
  interchangeLeaf = function(idx1, idx2) {
      [this.nodes[idx1], this.nodes[idx2]] = [this.nodes[idx2], this.nodes[idx1]];   
  }
  
  getChild = function(pIdx) {
      const [cIdx1, cIdx2] = [pIdx*2, pIdx*2+1];
      if (this.nodes.length > cIdx2) {
          return this.nodes[cIdx1][1] <= this.nodes[cIdx2][1] ? [this.nodes[cIdx1], cIdx1] : [this.nodes[cIdx2], cIdx2];
      }
      if (this.nodes.length > cIdx1) {
          return [this.nodes[cIdx1], cIdx1];
      }
      return [null, null];
  }
  
  
  getParent = function(cIdx) {
      const pIdx = parseInt(cIdx/2)
      return [this.nodes[pIdx],  pIdx]
  }
  
  
  
}