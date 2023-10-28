import type { Meta, StoryObj } from '@storybook/react';

import { FlagChinaSimplifiedIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagChinaSimplifiedIcon',
  component: FlagChinaSimplifiedIcon,
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
} satisfies Meta<typeof FlagChinaSimplifiedIcon>;

export default meta;

type Story = StoryObj<typeof FlagChinaSimplifiedIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
