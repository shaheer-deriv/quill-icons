import type { Meta, StoryObj } from '@storybook/react';

import { FlagNorwayIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagNorwayIcon',
  component: FlagNorwayIcon,
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
} satisfies Meta<typeof FlagNorwayIcon>;

export default meta;

type Story = StoryObj<typeof FlagNorwayIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
