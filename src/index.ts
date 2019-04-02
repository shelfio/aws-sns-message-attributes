import {MessageAttributeMap, MessageAttributeValue} from 'aws-sdk/clients/sns';

type attributeType = 'Number' | 'String.Array' | 'String';

interface InputParams {
  [key: string]: number | string | object;
}

export function transformMessageAttributes(messageAttributes: InputParams): MessageAttributeMap {
  const newMessageAttributes: MessageAttributeMap = {};

  for (let key in messageAttributes) {
    const value = messageAttributes[key];
    newMessageAttributes[key] = getAttribute(value);
  }

  return newMessageAttributes;
}

function getAttribute(value): MessageAttributeValue {
  const attributeType = getAttributeType(value);

  return {
    DataType: attributeType,
    StringValue: attributeType === 'String.Array' ? JSON.stringify(value) : value
  };
}

function getAttributeType(value): attributeType {
  if (typeof value === 'number') {
    return 'Number';
  }

  if (Array.isArray(value)) {
    return 'String.Array';
  }

  return 'String';
}
