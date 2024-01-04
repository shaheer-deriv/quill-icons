import type { Meta, StoryObj } from '@storybook/react';

import { LightRegulatedIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightRegulatedIcon',
  component: LightRegulatedIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightRegulatedIcon>;

export default meta;

type Story = StoryObj<typeof LightRegulatedIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
