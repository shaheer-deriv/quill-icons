import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeLimitedInfluenceIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeLimitedInfluenceIcon',
  component: IllustrativeLimitedInfluenceIcon,
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
} satisfies Meta<typeof IllustrativeLimitedInfluenceIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeLimitedInfluenceIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
