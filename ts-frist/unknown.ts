interface Unknown1 {
  talk: () => void;
}
const unknownFuc: Unknown1 = {
  talk() {
    return 3;
  },
};

const unknownTest: unknown = unknownFuc.talk();
(unknownTest as Unknown1).talk();

try {
} catch (error) {
  (error as Error).message;
}
