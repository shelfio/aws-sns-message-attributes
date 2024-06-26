//import type {MessageAttributeValue} from '@aws-sdk/client-sns'; Original type import

type attributeType = 'Number' | 'String.Array' | 'String';
type attribute = number | string | Array<string> | boolean;

type InputParams = {
  [key: string]: attribute;
};
type MessageAttributeValue = {
  DataType: string | undefined;
  StringValue?: string;
  BinaryValue?: Uint8Array;
};
type MessageAttributeMap = {
  [key: string]: MessageAttributeValue;
};

export function transformMessageAttributes(messageAttributes: InputParams): MessageAttributeMap {
  const newMessageAttributes: MessageAttributeMap = {};

  for (const key in messageAttributes) {
    const value = messageAttributes[key];
    newMessageAttributes[key] = getAttribute(value);
  }

  return newMessageAttributes;
}

function getAttribute(value: attribute): MessageAttributeValue {
  const attributeType = getAttributeType(value);

  return {
    DataType: attributeType,
    StringValue: attributeType === 'String.Array' ? JSON.stringify(value) : value.toString(),
  };
}

function getAttributeType(value: attribute): attributeType {
  if (typeof value === 'number') {
    return 'Number';
  }

  if (Array.isArray(value)) {
    return 'String.Array';
  }

  return 'String';
}
