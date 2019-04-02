type attributeType = 'Number' | 'String.Array' | 'String';

interface Attribute {
  DataType: attributeType;
  StringValue: string | number;
}

interface MessageAttributes {
  [key: string]: Attribute;
}

interface InputParams {
  [key: string]: object;
}

export function transformMessageAttributes(messageAttributes: InputParams): MessageAttributes {
  const newMessageAttributes: MessageAttributes = {};

  for (let key in messageAttributes) {
    const value = messageAttributes[key];
    newMessageAttributes[key] = getAttribute(value);
  }

  return newMessageAttributes;
}

function getAttribute(value): Attribute {
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
