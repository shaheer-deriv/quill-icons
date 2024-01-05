import type { Meta, StoryObj } from '@storybook/react';

import { LightTightSpreadsIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightTightSpreadsIcon',
  component: LightTightSpreadsIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightTightSpreadsIcon>;

export default meta;

type Story = StoryObj<typeof LightTightSpreadsIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
