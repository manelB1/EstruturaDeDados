export const nodeColor = {
  RED: 1,
  BLACK: 0,
};

export function toNumber(key) {
  const offset = 96;
  if (isNaN(key) && typeof key === "string") {
    const keyToLower = key.toLowerCase();
    if (keyToLower.length > 1) {
      let number = "";
      
      for (let ch of keyToLower) {
        number += ch.charCodeAt(0) - offset + "";
      }
      return parseInt(number);
    }
    return keyToLower.charCodeAt(0) - offset;
  }
  return key;
}

export function isNilNode(node) {
  return (
    node == null ||
    (node.key == null &&
      node.value == null &&
      node.color === nodeColor.BLACK &&
      node.left == null &&
      node.right == null)
  );
}

export class Node {
  constructor(key, value) {
    this.key = toNumber(key);
    this.value = value;
    this.left = null;
    this.right = null;
    this.color = null;
    this.parent = null;
  }
  isRed() {
    return this.color === nodeColor.RED;
  }

  getValue() {
    return {
      key: this.key,
      value: this.value,
    };
  }
}

export function createNode(key, value) {
    let node = new Node(key, value);
  
    //left leaf has color black. left, right to be nul
    let leftLeaf = new Node(null, null);
    leftLeaf.color = nodeColor.BLACK;
    leftLeaf.left = null;
    leftLeaf.right = null;
    leftLeaf.parent = node;
  
    //right leaf has color black. left, right to be nul
    let rightLeaf = new Node(null, null);
    rightLeaf.color = nodeColor.BLACK;
    rightLeaf.left = null;
    rightLeaf.right = null;
    rightLeaf.parent = node;
  
    //map leaves
    node.left = leftLeaf;
    node.right = rightLeaf;
    return node;
  }

//CRIA UM NÓ FOLHA COM DE COR PRETA COM A ESPECIFICAÇÃO DO PARENTE
export function createLeafNode(parent) {
  let node = new Node(null, null);
  node.color = nodeColor.BLACK;
  node.parent = parent;
  return node;
}

export class RbTree {
  constructor() {
    this.root = null;
  }

  find(input) {
    const key = toNumber(input);
    let node = this.root;
    while (node != null) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        return node.value;
      }
    }
    return null;
  }
  
  findNode(key) {
    let node = this.root;
    while (node != null) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else if (key === node.key) {
        return node;
      } else {
        return null;
      }
    }
    return null;
  }

  /**
   * Complexity: O(1).
   *       y                   x
   *      / \                 / \
   *     x  Gamma   ====>   alpha y
   *   /  \                      / \
   * alpha beta               beta Gamma
   * method
   * param Node node Node.
   * return Node
   */
  rotateRight(node) {
    const y = node.left;

    if (isNilNode(y.right)) {
      node.left = createLeafNode(node);
    } else {
      node.left = y.right;
    }

    if (!isNilNode(y.right)) {
      y.right.parent = node;
    }
    y.parent = node.parent;
    if (isNilNode(node.parent)) {
      this.root = y;
    } else {
      if (node === node.parent.right) {
        node.parent.right = y;
      } else {
        node.parent.left = y;
      }
    }
    y.right = node;
    node.parent = y;
  }

  /**
   * Complexity: O(1).
   *       y                   x
   *      / \                 / \
   *     x  Gamma   <====   alpha y
   *   /  \                      / \
   * alpha beta               beta Gamma
   * method
   * param Node node Node.
   * return Node
   */
  rotateLeft(node) {
    const y = node.right;

    // console.log(y.left)
    if (isNilNode(y.left)) {
      node.right = createLeafNode(node);
    } else {
      node.right = y.left;
    }

    if (!isNilNode(y.left)) {
      y.left.parent = node;
    }
    y.parent = node.parent;
    if (isNilNode(node.parent)) {
      this.root = y;
    } else {
      if (node === node.parent.left) {
        node.parent.left = y;
      } else {
        node.parent.right = y;
      }
    }
    y.left = node;
    node.parent = y;
  }

  /**
   * param Node node Node.
   * Make the color of newly inserted nodes as RED and then perform standard BST insertion
   * If x is root, change color of node as BLACK (Black height +1).
   */
  insert(key, value) {
    let y = null;
    let x = this.root;
    const z = createNode(key, value);
    if (this.root == null) {
      this.root = z;
      z.color = nodeColor.BLACK;
      z.parent = null;
    } else {
      while (!isNilNode(x)) {
        y = x;
        if (z.key < x.key) {
          x = x.left;
        } else {
          x = x.right;
        }
      }
      z.parent = y;
      // current node parent is root
      if (z.key < y.key) {
        y.left = z;
      } else {
        y.right = z;
      }
      // y.right is now z
      z.left = createLeafNode(z);
      z.right = createLeafNode(z);
      z.color = nodeColor.RED;
      this.fixTree(z);
    }
  }

  

  fixTree(node) {
    while (node.parent != null && node.parent.color === nodeColor.RED) {
      let uncle = null;
      if (node.parent === node.parent.parent.left) {
        uncle = node.parent.parent.right;

        if (uncle != null && uncle.color === nodeColor.RED) {
          node.parent.color = nodeColor.BLACK;
          uncle.color = nodeColor.BLACK;
          node.parent.parent.color = nodeColor.RED;
          node = node.parent.parent;
          continue;
        }
        if (node === node.parent.right) {
          // Double rotation needed
          node = node.parent;
          this.rotateLeft(node);
        }
        node.parent.color = nodeColor.BLACK;
        node.parent.parent.color = nodeColor.RED;
        // if the "else if" code hasn't executed, this
        // is a case where we only need a single rotation
        this.rotateRight(node.parent.parent);
      } else {
        uncle = node.parent.parent.left;
        if (uncle != null && uncle.color === nodeColor.RED) {
          node.parent.color = nodeColor.BLACK;
          uncle.color = nodeColor.BLACK;
          node.parent.parent.color = nodeColor.RED;
          node = node.parent.parent;
          continue;
        }
        if (node === node.parent.left) {
          // Double rotation needed
          node = node.parent;
          this.rotateRight(node);
        }
        node.parent.color = nodeColor.BLACK;
        node.parent.parent.color = nodeColor.RED;
        // if the "else if" code hasn't executed, this
        // is a case where we only need a single rotation
        this.rotateLeft(node.parent.parent);
      }
    }
    this.root.color = nodeColor.BLACK;
  }

  emptyTree() {
    this.root = null;
  }

  min(node) {
    if (node == null || node === undefined) {
      return {};
    }
    while (!isNilNode(node.left)) {
      node = node.left;
    }
    return node;
  }

  transplant(u, v) {
    if (u.parent == null) {
      this.root = v;
    } else if (u === u.parent.left) {
      u.parent.left = v;
    } else {
      u.parent.right = v;
    }
    v.parent = u.parent;
  }

  /**
   * method
   * param Node node Node.
   * return Node
   */
  remove(key) {
    const z = this.findNode(key);
    if (z == null) {
      return;
    }
    let x;
    let y = z;
    let y_original_color = y.color;
    if (isNilNode(z.left)) {
      x = z.right;
      this.transplant(z, z.right);
    } else if (isNilNode(z.right)) {
      x = z.left;
      this.transplant(z, z.left);
    } else {
      y = this.min(z.right);
      y_original_color = y.color;
      x = y.right;
      if (y.parent === z) {
        x.parent = y;
      } else {
        this.transplant(y, y.right);
        y.right = z.right;
        y.right.parent = y;
      }
      this.transplant(z, y);
      y.left = z.left;
      y.left.parent = y;
      y.color = z.color;
    }
    if (y_original_color === nodeColor.BLACK) {
      this.removeFix(x);
    }
  }

  /**
   * a method to fix remove key
   */
  removeFix(node) {
    while (node !== this.root && node.color === nodeColor.BLACK) {
      if (node === node.parent.left) {
        let w = node.parent.right;
        if (w.color === nodeColor.RED) {
          w.color = nodeColor.BLACK;
          node.parent.color = nodeColor.RED;
          this.rotateLeft(node.parent);
          w = node.parent.right;
        }
        if (
          w.left.color === nodeColor.BLACK &&
          w.right.color === nodeColor.BLACK
        ) {
          w.color = nodeColor.RED;
          node = node.parent;
          continue;
        } else if (w.right.color === nodeColor.BLACK) {
          w.left.color = nodeColor.BLACK;
          w.color = nodeColor.RED;
          w = node.parent.right;
        }
        if (w.right.color === nodeColor.RED) {
          w.color = node.parent.color;
          node.parent.color = nodeColor.BLACK;
          w.right.color = nodeColor.BLACK;
          this.rotateLeft(node.parent);
          node = this.root;
        }
      } else {
        let w = node.parent.left;
        if (w.color === nodeColor.RED) {
          w.color = nodeColor.BLACK;
          node.parent.color = nodeColor.RED;
          this.rotateRight(node.parent);
          w = node.parent.left;
        }
        if (
          w.right.color === nodeColor.BLACK &&
          w.left.color === nodeColor.BLACK
        ) {
          w.color = nodeColor.RED;
          node = node.parent;
        } else if (w.left.color === nodeColor.BLACK) {
          w.right.color = nodeColor.BLACK;
          w.color = nodeColor.RED;
          this.rotateLeft(w);
          w = node.parent.left;
        }
        if (w.left.color === nodeColor.RED) {
          w.color = node.parent.color;
          node.parent.color = nodeColor.BLACK;
          w.left.color = nodeColor.BLACK;
          this.rotateRight(node.parent);
          node = this.root;
        }
      }
    }
    node.color = nodeColor.BLACK;
  }

  createIterator() {
    return new iterator(this.root);
  }
}
