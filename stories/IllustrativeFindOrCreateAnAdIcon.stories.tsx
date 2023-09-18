import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeFindOrCreateAnAdIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeFindOrCreateAnAdIcon',
  component: IllustrativeFindOrCreateAnAdIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IllustrativeFindOrCreateAnAdIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeFindOrCreateAnAdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
